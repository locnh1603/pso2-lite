import { ApiProperty } from "@nestjs/swagger";
import { CraftRecipe } from "src/shared/gather-resource-class.interface";

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

export class GatherCuisineDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({type: GatherCuisineBuff})
  buff: GatherCuisineBuff;
  @ApiProperty({type: [CraftRecipe]})
  recipe: CraftRecipe[]
}

