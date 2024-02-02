import config from "./config/config.js";
import app from "./src/app.js";
import connectMongo from "./src/mongoose.js"

startServer();

async function startServer() {
  const db = await connectMongo()

  app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`)
    db.on("once", () => console.log("Up database"))
    db.on("error", (e) => console.log("Error in mongodb: ", e))
  })
}

