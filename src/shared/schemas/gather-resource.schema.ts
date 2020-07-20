import { Schema, Prop, SchemaFactory, raw } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger";
import { GatherResourceClass } from "src/shared/dto/gather-resource-class.interface";
import { GatherResourceDto } from "src/shared/dto/gather-resource-dto.model";
import { v4 } from 'uuid'

@Schema()
export class GatherResource extends Document {
  @Prop()
  @ApiProperty({
    type: String
  })
  id: string;

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  icon: string;

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

  static from(dto: GatherResourceDto): GatherResource {
    const newRes = new GatherResource();
    newRes.name = dto.name;
    newRes.location = dto.location;
    newRes.region = dto.region;
    newRes.rarity = dto.rarity;
    newRes.icon = dto.icon;
    newRes.type = dto.type;
    newRes.class = dto.class;
    return newRes;
  }
}

export const GatherResourceSchema = SchemaFactory.createForClass(GatherResource);