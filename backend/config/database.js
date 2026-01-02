const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase');
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection error", err);
    process.exit(1);
  }
};

module.exports = connectDb;
