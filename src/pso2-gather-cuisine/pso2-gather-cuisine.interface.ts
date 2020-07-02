import * as mongoose from 'mongoose';
import { GatherResourceClass } from 'src/shared/gather-resource-class.interface';

export const GatherCuisineSchema = new mongoose.Schema({
  id: String,
  name: String,
  buff: {
    class: {
      category: String,
      size: String,
      value: Number
    },
    collectRate: Number,
    fishingRate: Number
  },
  recipe: [{
    resource: String,
    amount: Number
  }]
});

export interface GatherCuisine {
  id: string;
  name: string;
  buff: GatherCuisineBuff;
  recipe: CuisineRecipe[]
}

interface GatherCuisineClassBuff {
  category: string;
  size: string;
  value: number;
}

interface GatherCuisineBuff {
  class: GatherCuisineClassBuff;
  collectRate: number;
  fishingRate: number;
}

interface CuisineRecipe {
  resource: string;
  amount: number;
}