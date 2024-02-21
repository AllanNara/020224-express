import { Router } from "express";
import CharacterControllers from "../../controllers/v1/characters.controllers.js";

class CharacterRoutes { 
  constructor() {
    this.path = "/characters";
    this.router = Router();
    this.controllers = new CharacterControllers();
    this.initCharacterRoutes();
  }

  initCharacterRoutes() {
    this.router.get(`${this.path}`, this.controllers.getAllCharacters);
    this.router.get(`${this.path}/:cid`, this.controllers.getCharacter);
    this.router.post(`${this.path}`, this.controllers.createCharacter);
    this.router.put(`${this.path}/:cid`, this.controllers.updateCharacter);
    this.router.put(`${this.path}/:cid`, this.controllers.deleteCharacter);
  }

}

export default CharacterRoutes