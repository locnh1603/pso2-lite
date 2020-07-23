import * as mongoose from 'mongoose';
import { v4 } from 'uuid';

export const GatherCraftSchema = new mongoose.Schema({
  id: {
    type: String,
    default: v4
  },
  name: {
    type: String,
    default: '',
    required: true,
    index: true
  },
  class: {
    type: String
  },
  type: {
    type: String
  },
  recipe: {
    type: [{
      resourceId: String,
      resourceName: String,
      amount: Number
    }],
    default: []
  }
});