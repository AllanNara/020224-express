import CharacterRepository from "../../repositories/characters.repository.js";

class CharacterControllers {
  constructor() {
    this.repository = new CharacterRepository();
  }

  async getAllCharacters(req, res, next) {
    const limit = req.query.limit;
    let characters;

    try {
      characters = await this.repository.getAll();
    } catch (error) {
      next(error);
      return
    }

    if(limit && !isNaN(parseInt(limit)) ) {
      characters = characters.slice(0, limit)
    }

    res.json({ code: 200, status: "success", payload: characters, limit: limit ?? "none" });
  };


  async getCharacter(req, res, next) {
    const id = req.params.cid;
    let character;

    try {
      character = await this.repository.getById(id);
    } catch(error) {
      next(error);
      return
    }

    res.json({ code: 200, status: "success", payload: character })
  };


  async createCharacter(req, res, next) {
    const { name, description } = req.body;
    const thumbnail = req.body.thumbnail ?? [];

    if(!name || !description ) {
      res.status(400).json({ code: 400, status: "failed", error: "Fields 'name' or 'description' are missing" });
      return
    }

    try {
      const newCharacter = await this.repository.createOne({ name, description, thumbnail });
      res.status(201).json({ code: 201, status: "created", payload: { id: newCharacter._id }})
    } catch(error) {
      next(error)
    }
  }
  
  
  async updateCharacter(req, res, next) {
    const id = req.params.cid;

    try {
      const result = await this.repository.updateById(id, req.body);
      res.status(204).json({ code: 204, status: "updated", payload: result });
    } catch (error) {
      next(error)
    }
  }

  async deleteCharacter(req, res, next) {
    const id = req.params.cid;

    try {
      const result = await this.repository.deleteById(id);
      res.status(204).json({ code: 204, status: "deleted", payload: result });
    } catch (error) {
      next(error)
    }
  }

}

export default CharacterControllers;