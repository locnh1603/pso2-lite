import { Schema, Prop, raw, SchemaFactory } from "@nestjs/mongoose";
import { Document  } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger";
import { GatherCuisineBuff } from "src/shared/dto/gather-cuisine-dto.model";
import { CraftRecipe } from "src/shared/dto/gather-resource-class.interface";

@Schema()
export class GatherCuisine extends Document {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  type: string;

  @Prop(raw({
    class: {type: {
      category: { type: String },
      size: {type: String},
      value: {type: Number}
    }},
    collectRate: { type: Number },
    fishingRate: { type: Number }
  }))
  @ApiProperty({type: GatherCuisineBuff})
  buff: GatherCuisineBuff;

  @Prop([raw({
    resource: { type: String },
    amount: { type: Number }
  })])
  @ApiProperty({type: [CraftRecipe]})
  recipe: CraftRecipe[]
}

export const GatherCuisineSchema = SchemaFactory.createForClass(GatherCuisine)