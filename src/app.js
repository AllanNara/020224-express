import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import ContainerRoutes from "./routes/index.routes.js";

class App {
	constructor() {
		this.app = express();
		this.port = config.PORT;
    this.mongoUri = config.MONGO_URI
		this.containerRoutes = new ContainerRoutes();
		this.setup();
	}

	setup() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use("/", this.containerRoutes.router);
		this.app.use(this.errorHandler);
	}

	errorHandler(err, req, res, next) {
		console.error(err.stack);
		res.status(500).json({ message: "Internal Server Error" });
	}

  connectToMongoDB() {
    mongoose.connect(this.mongoUri);
    const db = mongoose.connection;
    db.on("error", (err) => console.error(`Error connecting to MongoDB: ${err}`));
    db.on("disconnected", () => console.log("Desconexión completa de la base de datos MongoDB"));
    db.on("reconnected", () => console.log("Reconexión exitosa a la base de datos MongoDB"));
    db.on("reconnectFailed", () => console.error("Error al intentar reconectar a la base de datos MongoDB"));
    return db
  }

	start() {
    const db = this.connectToMongoDB();
    db.on("connected", () => {
      console.log(`MongoDB connected successfully!`);
      this.app.listen(this.port, () => {
        console.log(`Server listening on port ${this.port}`);
      });
    });
	}
}

export default App;
