import { ApiProperty } from "@nestjs/swagger";
import { GatherCraftTypeEnums } from "src/shared/enum/pso2-lite.enum";
import { PSO2ClassEnums } from "src/shared/enum/gather-resource.enum";
import { CraftRecipe } from "src/shared/models/craft-recipe.model";

export class GatherCraftDto {
  @ApiProperty()
  name: string;

  @ApiProperty({enum: PSO2ClassEnums})
  class: PSO2ClassEnums;

  @ApiProperty({enum: GatherCraftTypeEnums})
  type: GatherCraftTypeEnums;

  @ApiProperty({type: [CraftRecipe]})
  recipe: CraftRecipe[];
}