import { Schema, Prop, SchemaFactory, raw } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger";
import { GatherResourceClass } from "src/shared/dto/gather-resource-class.interface";

@Schema()
export class GatherResource extends Document {
  @Prop()
  @ApiProperty()
  id: string;

  @Prop()
  @ApiProperty()
  name: string;

  @Prop([String])
  @ApiProperty({type: [String]})
  location: string[];
  
  @Prop([String])
  @ApiProperty({type: [String]})
  region: string[];

  @Prop(raw({
    category: { type : String},
    size: { type : String }
  }))
  @ApiProperty({type: GatherResourceClass})
  class: {
    category: string,
    size: string
  };

  @Prop()
  @ApiProperty()
  rarity: number;

  @Prop()
  @ApiProperty()
  type: string;
}

export const GatherResourceSchema = SchemaFactory.createForClass(GatherResource);