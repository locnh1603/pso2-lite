import * as mongoose from 'mongoose';
import { v4 } from 'uuid'
import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums, GatheringResourceTypeEnums } from 'src/shared/enum/gather-resource.enum';

export const GatherResourceSchema = new mongoose.Schema({
  id: {
    type: String,
    default: v4
  },
  name: {
    type: String,
    default: '',
    index: true
  },
  icon: {
    type: String,
    default: ''
  },
  location: {
    type: [String],
    default: []
  },
  region: {
    type: [String],
    default: ''
  },
  class: {
    type: {
      category: String,
      size: String
    },
    default: {
      category: GatheringResourceCategoryEnums.Other,
      size: GatheringResourceSizeEnums.Small,
    }
  },
  rarity: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: GatheringResourceTypeEnums.Fishing
  }
});