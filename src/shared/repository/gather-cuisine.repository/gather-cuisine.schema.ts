import * as mongoose from "mongoose";
import { v4 } from 'uuid';

export const GatherCuisineSchema = new mongoose.Schema({
  id: {
    type: String,
    default: v4
  },
  name: {
    type: String,
    default: '',
    index: true,
    required: true
  },
  recipe: {
    type: [{
      resourceName: String,
      resourceId: String,
      amount: Number
    }],
    default: [],
  },
  buff: {
    type: {
      class: {
        category: String,
        size: String,
        value: Number
      },
      collectRate: Number,
      fishingRate: Number
    },
    default: {},
    required: true
  }
})