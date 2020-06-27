import * as mongoose from 'mongoose';

export const GatherResouceSchema = new mongoose.Schema({
  id: String,
  code: String,
  name: String,
  location: String,
  class: {
    category: String,
    size: String,
  },
  rarity: Number,
  usedIn: {
    food: String,
    order: String,
    craft: String
  },
  type: String
});