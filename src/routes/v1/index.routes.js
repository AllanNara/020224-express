import { Router } from "express";
import CharacterRoutes from "./characters.routes.js"

class V1Routes {
  constructor() {
    this.path = "/v1"
    this.router = Router();
    this.characterRoutes = new CharacterRoutes()
    this.initRoutes();
  }

  initRoutes() {
    this.router.use(`${this.path}/characters`, this.characterRoutes.router);
  }
}

export default V1Routes