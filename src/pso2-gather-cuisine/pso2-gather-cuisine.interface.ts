import * as mongoose from 'mongoose';
import { GatherResourceClass, CraftRecipe } from 'src/shared/gather-resource-class.interface';
import { ApiProperty } from '@nestjs/swagger';

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

export class GatherCuisineClassBuff {
  @ApiProperty()
  category: string;
  @ApiProperty()
  size: string;
  @ApiProperty()
  value: number;
}

export class GatherCuisineBuff {
  @ApiProperty({type: GatherCuisineClassBuff})
  class: GatherCuisineClassBuff;
  @ApiProperty()
  collectRate: number;
  @ApiProperty()
  fishingRate: number;
}

export class GatherCuisine {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({type: GatherCuisineBuff})
  buff: GatherCuisineBuff;
  @ApiProperty({type: [CraftRecipe]})
  recipe: CraftRecipe[]
}




