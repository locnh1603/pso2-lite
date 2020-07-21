import { Schema, Prop, raw, SchemaFactory } from "@nestjs/mongoose";
import { Document  } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger";
import { GatherCuisineBuff } from "src/shared/dto/gather-cuisine-dto.model";

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
}

export const GatherCuisineSchema = SchemaFactory.createForClass(GatherCuisine)