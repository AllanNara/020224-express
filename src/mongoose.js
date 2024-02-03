import mongoose from "mongoose";
import config from "../config/config.js";

function connectMongo() {

  mongoose.connect(config.MONGO_URI);

  const db = mongoose.connection;

  db.on("connecting", () => {
    console.log("Conectándose a la base de datos MongoDB...");
  });

  db.on("disconnecting", () => {
    console.log("Desconectándose de la base de datos MongoDB...");
  });

  db.on("disconnected", () => {
    console.log("Desconexión completa de la base de datos MongoDB");
  });

  db.on("error", (err) => {
    console.error(`Error connecting to MongoDB: ${err}`);
  });

  db.on("reconnected", () => {
    console.log("Reconexión exitosa a la base de datos MongoDB");
  });

  db.on("reconnectFailed", () => {
    console.error("Error al intentar reconectar a la base de datos MongoDB");
  });

  return db;
} 

export default connectMongo
