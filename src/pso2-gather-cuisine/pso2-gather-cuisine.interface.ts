import * as mongoose from 'mongoose';
import { GatherResourceClass } from 'src/shared/gather-resource-class.interface';

export const GatherCuisineSchema = new mongoose.Schema({
  id: String,
  name: String,
  buff: {
    category: String,
    size: String
  },
  recipe: [{
    resourceCode: String,
    amount: Number
  }]
});

export interface GatherCuisine {
  id: string;
  name: string;
  buff: GatherResourceClass;
  recipe: CuisineRecipe[]
}

interface CuisineRecipe {
  resourceCode: string;
  amount: number;
}