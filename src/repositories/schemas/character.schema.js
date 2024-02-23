import { Schema, model } from "mongoose";

const characterCollection = "characters"

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
})

const CharacterModel = model(characterCollection, characterSchema);

export default CharacterModel;