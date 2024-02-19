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
    type: [String]
  }
})

const characterModel = model(characterCollection, characterSchema);

export default characterModel;