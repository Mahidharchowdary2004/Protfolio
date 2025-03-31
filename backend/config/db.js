const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected:', conn.connection.host);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    if (error.name === 'MongoNetworkError') {
      console.error('Could not connect to MongoDB. Please check if:');
      console.error('1. MongoDB server is running');
      console.error('2. MongoDB URI is correct');
      console.error('3. MongoDB host is accessible');
    }
    throw error;
  }
};

module.exports = { connectDB }; 