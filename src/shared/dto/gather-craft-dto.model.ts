import { ApiProperty } from "@nestjs/swagger";
import { GatherCraftTypeEnums } from "src/shared/pso2-lite.enum";
import { CraftRecipe } from "src/shared/dto/gather-resource-class.interface";
import { PSO2ClassEnums } from "src/shared/gather-resource.enum";

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