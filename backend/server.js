const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { pool, testConnection } = require('./config/db');

const app = express();
const startPort = process.env.PORT || 3003;

// CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:8080',
      'http://localhost:*',
      'http://localhost:8081',
      'http://localhost:5173',
      'https://mahidharpotfolio.netlify.app',
      'https://portfolio-nv339awbd-mahidharchowdary2004s-projects.vercel.app'
    ];

    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy violation'), false);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin'],
  credentials: true,
  preflightContinue: false
}));

app.use(express.json());

// Create contact messages table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

// Initialize database with retry logic
const initializeDatabase = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Attempting database connection (attempt ${i + 1}/${retries})...`);
      console.log('Database configuration:', {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
      });

      const isConnected = await testConnection();
      if (!isConnected) {
        console.log(`Database connection attempt ${i + 1} failed. Retrying in 5 seconds...`);
        await new Promise(resolve => setTimeout(resolve, 5000));
        continue;
      }

      console.log('Creating contact_messages table if it does not exist...');
      await pool.query(createTableQuery);
      console.log('Database table ready');
      return true;
    } catch (error) {
      console.error(`Error initializing database (attempt ${i + 1}):`, error.message);
      if (error.code === 'ER_ACCESS_DENIED_ERROR') {
        console.error('Access denied. Please check your database credentials.');
      } else if (error.code === 'ER_BAD_DB_ERROR') {
        console.error('Database does not exist. Please create the database first.');
      } else if (error.code === 'ECONNREFUSED') {
        console.error('Could not connect to database server. Please check if the server is running.');
      }
      
      if (i < retries - 1) {
        console.log('Waiting 5 seconds before retry...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }
  console.error('Failed to initialize database after multiple attempts');
  return false;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    console.log('Content-Type:', req.get('content-type'));
    console.log('Headers:', req.headers);

    if (!req.is('application/json')) {
      console.log('Invalid content type:', req.get('content-type'));
      return res.status(400).json({
        success: false,
        error: 'Content-Type must be application/json'
      });
    }

    const { name, email, subject, message } = req.body;
    console.log('Parsed form data:', { name, email, subject, message });

    if (!name || !email || !subject || !message) {
      console.log('Missing required fields:', { name, email, subject, message });
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
        missingFields: {
          name: !name,
          email: !email,
          subject: !subject,
          message: !message
        }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    console.log('Attempting to insert into MySQL...');
    const [result] = await pool.query(
      'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name, email, subject, message]
    );
    
    console.log('Successfully inserted message:', result);
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: { id: result.insertId, name, email, subject, message }
    });
  } catch (error) {
    console.error('Error saving message:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      error: 'Failed to save message',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Function to find an available port
const findAvailablePort = (startPort) => {
  return new Promise((resolve, reject) => {
    const server = require('net').createServer();

    server.listen(startPort, () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(parseInt(startPort) + 1));
      } else {
        reject(err);
      }
    });
  });
};

// Start server with database initialization
const startServer = async () => {
  try {
    const port = await findAvailablePort(startPort);
    
    // Initialize database before starting server
    const dbInitialized = await initializeDatabase();
    if (!dbInitialized) {
      console.error('Failed to initialize database. Server will start but contact form may not work.');
    }

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log(`Frontend can connect to: http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();