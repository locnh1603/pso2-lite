import { ApiProperty } from "@nestjs/swagger";
import { CraftRecipe } from "src/shared/models/craft-recipe.model";
import { GatheringResourceSizeEnums, GatheringResourceCategoryEnums } from "src/shared/enum/gather-resource.enum";

export class GatherCuisineClassBuff {
  @ApiProperty({type: String})
  category: string;
  @ApiProperty({type: String})
  size: string;
  @ApiProperty({type: Number})
  value: number;
}

export class GatherCuisineBuff {
  @ApiProperty({type: GatherCuisineClassBuff})
  class: GatherCuisineClassBuff;
  @ApiProperty({type: Number})
  collectRate: number;
  @ApiProperty({type: Number})
  fishingRate: number;
}

export class GatherCuisineDto {
  @ApiProperty({
    type: String
  })
  id: string;
  @ApiProperty({
    type: String
  })
  name: string;
  @ApiProperty({
    type: [CraftRecipe]
  })
  recipe: CraftRecipe[]
  @ApiProperty({type: GatherCuisineBuff})
  buff: GatherCuisineBuff;

  constructor() {
    this.id = '';
    this.name = '';
    this.recipe = [];
    this.buff = {
      collectRate: 0,
      fishingRate: 0,
      class: {
        size: GatheringResourceSizeEnums.Small,
        category: GatheringResourceCategoryEnums.Other,
        value: 0
      }
    }
  }
}

