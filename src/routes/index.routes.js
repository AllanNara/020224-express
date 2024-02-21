import { Router } from "express";
import V1Routes from "./v1/index.routes.js"

class ContainerRoutes {
  constructor() {
    this.path = "/api"
    this.router = Router();
    this.v1 = new V1Routes();
    this.initRoutes();
  }

  initRoutes() {
    this.router.use(`${this.path}/`, this.v1.router);
  }
}

export default ContainerRoutes