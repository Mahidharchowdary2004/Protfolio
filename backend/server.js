const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');

const app = express();
const startPort = process.env.PORT || 3001;

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

    if (!origin) return callback(null, true); // Allow non-browser requests (e.g., curl)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Disallowed origins error response
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

db.query(createTableQuery)
  .then(() => console.log('Database table ready'))
  .catch(err => console.error('Error creating table:', err));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body.data ? JSON.parse(req.body.data) : req.body;
    const { name, email, subject, message } = formData;

    const query = `
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `;

    await db.query(query, [name, email, subject, message]);

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message' });
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

// Start server with automatic port finding
const startServer = async () => {
  try {
    const port = await findAvailablePort(startPort);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log(`Frontend can connect to: http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();