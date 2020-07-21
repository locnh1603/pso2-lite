import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger";
import { PSO2ClassEnums } from "src/shared/enum/gather-resource.enum";
import { GatherCraftTypeEnums } from "src/shared/enum/pso2-lite.enum";
import { CraftRecipe } from "src/shared/models/craft-recipe.model";

@Schema()
export class GatherCraft extends Document {

  @Prop()
  @ApiProperty()
  id: string;

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty({enum: PSO2ClassEnums})
  class: PSO2ClassEnums;

  @Prop()
  @ApiProperty({enum: GatherCraftTypeEnums})
  type: GatherCraftTypeEnums;

  @Prop([CraftRecipe])
  @ApiProperty({type: [CraftRecipe]})
  recipe: CraftRecipe[];
}

export const GatherCraftSchema = SchemaFactory.createForClass(GatherCraft)