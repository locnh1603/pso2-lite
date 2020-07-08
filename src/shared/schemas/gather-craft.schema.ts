import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger";
import { PSO2ClassEnums } from "src/shared/gather-resource.enum";
import { CraftRecipe } from "src/shared/gather-resource-class.interface";
import { GatherCraftTypeEnums } from "src/shared/pso2-lite.enum";

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