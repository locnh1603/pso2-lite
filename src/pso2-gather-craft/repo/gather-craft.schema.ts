import * as mongoose from 'mongoose';
import { v4 } from 'uuid';
import { GatherCraftTypeEnums } from 'src/shared/enum/pso2-lite.enum';
import { PSO2ClassEnums } from 'src/shared/enum/gather-resource.enum';

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