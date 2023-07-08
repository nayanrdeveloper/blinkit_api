const mongoose = require("mongoose");
const logger = require("winston");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file if using dotenv

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not set.");
    }

    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    logger.info(`MongoDB server is running on ${connection.connection.host}`);
  } catch (error) {
    logger.error(`Failed to connect to MongoDB: ${error.message}`);
    throw error;
  }
};

module.exports = connectDb;