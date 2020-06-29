import * as mongoose from 'mongoose';
import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums, GatheringResourceTypeEnums } from 'src/models/gathering-resource.enum';

export const GatherResouceSchema = new mongoose.Schema({
  id: String,
  code: String,
  name: String,
  location: String,
  region: String,
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

export interface GatherResource {
  id: string;
  code: string;
  name: string;
  region: string;
  location: string;
  class: GatherResourceClass;
  rarity: number;
  usedIn: {
    food: string,
    order: string,
    craft: string
  }
  type: GatheringResourceTypeEnums
}

interface GatherResourceClass {
  category: GatheringResourceCategoryEnums;
  size: GatheringResourceSizeEnums
}