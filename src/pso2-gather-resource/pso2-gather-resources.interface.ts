import * as mongoose from 'mongoose';
import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums, GatheringResourceTypeEnums } from 'src/shared/gather-resource.enum';

export const GatherResouceSchema = new mongoose.Schema({
  id: String,
  name: String,
  location: [String],
  region: String,
  class: {
    category: String,
    size: String,
  },
  rarity: Number,
  type: String
});

export interface GatherResource {
  id: string;
  name: string;
  region: string;
  location: string[];
  class: GatherResourceClass;
  rarity: number;
  type: GatheringResourceTypeEnums
}

interface GatherResourceClass {
  category: GatheringResourceCategoryEnums;
  size: GatheringResourceSizeEnums
}