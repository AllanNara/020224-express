import config from "./config/config.js";
import app from "./src/app.js";
import connectMongo from "./src/mongoose.js";

const db = connectMongo();
db.on("connected", () => {
	console.log(`MongoDB connected successfully!`);
	app.listen(config.PORT, () => {
		console.log(`Server listening on port ${config.PORT}`);
	});
});
