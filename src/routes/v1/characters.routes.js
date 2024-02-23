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
    this.router.get(`${this.path}/seeds`, this.controllers.populateDatabase.bind(this.controllers));
    this.router.get(`${this.path}/seeds/delete`, this.controllers.deleteAllDocuments.bind(this.controllers));

    this.router.get(`${this.path}`, this.controllers.getAllCharacters.bind(this.controllers));
    this.router.get(`${this.path}/:cid`, this.controllers.getCharacter.bind(this.controllers));
    this.router.post(`${this.path}`, this.controllers.createCharacter.bind(this.controllers));
    this.router.put(`${this.path}/:cid`, this.controllers.updateCharacter.bind(this.controllers));
    this.router.delete(`${this.path}/:cid`, this.controllers.deleteCharacter.bind(this.controllers));

  }

}

export default CharacterRoutes