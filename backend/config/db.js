const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful');
    connection.release();
    return true;
  } catch (error) {
    console.error('Error connecting to database:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('Could not connect to database. Please check if:');
      console.error('1. Database server is running');
      console.error('2. Database credentials are correct');
      console.error('3. Database host is accessible');
    }
    return false;
  }
};

module.exports = { pool, testConnection }; 