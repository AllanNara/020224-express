import mongoose from "mongoose";
import config from "../config/config.js";

async function connectMongo() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log(`MongoDB connected successfully!`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    throw error
  }

  return mongoose.connection;
} 

export default connectMongo
