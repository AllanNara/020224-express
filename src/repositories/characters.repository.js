import characterModel from "./schemas/character.schema";

class CharacterRepository {
  constructor() {
    this.model = characterModel
  };

  createOne = async(obj) => await this.model.create(obj);

  getAll = async() => await this.model.find({});

  getById = async(id) => await this.model.findById(id);

  updateById = async(id, obj) => await this.model.updateOne({ _id: id }, { $set: { ...obj } });

  deleteById = async(id) => await this.model.deleteOne({ _id: id });

}

export default CharacterRepository