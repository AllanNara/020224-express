import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd() + "/.env") });

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  API_MARVEL_KEY: process.env.API_MARVEL_KEY
}

  