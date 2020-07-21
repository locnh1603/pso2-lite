import { ApiProperty } from "@nestjs/swagger";
import { GatherCraftTypeEnums } from "src/shared/enum/pso2-lite.enum";
import { PSO2ClassEnums } from "src/shared/enum/gather-resource.enum";
import { CraftRecipe } from "src/shared/models/craft-recipe.model";

export class GatherCraftDto {

  @ApiProperty({type: String})
  id: string;

  @ApiProperty({type: String})
  name: string;

  @ApiProperty({type: String, enum: PSO2ClassEnums})
  class: PSO2ClassEnums;

  @ApiProperty({type: String, enum: GatherCraftTypeEnums})
  type: GatherCraftTypeEnums;

  @ApiProperty({type: [CraftRecipe]})
  recipe: CraftRecipe[];

  constructor() {
    this.name ='';
    this.id = '';
    this.class = PSO2ClassEnums.summoner;
    this.type = GatherCraftTypeEnums.lring;
    this.recipe = [];
  }
}