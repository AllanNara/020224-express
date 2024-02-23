import CharacterModel from "./schemas/character.schema.js";

class CharacterRepository {
  constructor() {
    this.model = CharacterModel
  };

  createOne = async(obj) => await this.model.create(obj);

  createMany = async(obj) => await this.model.insertMany(obj);

  deleteAll = async() => await this.model.deleteMany({});

  getAll = async() => await this.model.find({});

  getById = async(id) => await this.model.findById(id);

  updateById = async(id, obj) => await this.model.updateOne({ _id: id }, { $set: { ...obj } });

  deleteById = async(id) => await this.model.deleteOne({ _id: id });

}

export default CharacterRepository