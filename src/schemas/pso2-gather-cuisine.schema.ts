import * as mongoose from 'mongoose';

export const GatherCuisine = new mongoose.Schema({
  id: String,
  code: String,
  name: String,
  buff: {
    category: String,
    size: String
  },
  madeFrom: [{
    resourceCode: String,
    amount: Number
  }]
});