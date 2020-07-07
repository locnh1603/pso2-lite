import * as mongoose from 'mongoose';
import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums, GatheringResourceTypeEnums } from 'src/shared/gather-resource.enum';
import { ApiProperty } from '@nestjs/swagger';
import { GatherResourceClass } from 'src/shared/gather-resource-class.interface';

export const GatherResouceSchema = new mongoose.Schema({
  id: String,
  name: String,
  location: [String],
  region: String,
  class: {
    category: String,
    size: String,
  },
  rarity: Number,
  type: String
});

export class GatherResource {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  region: string;
  @ApiProperty()
  location: string[];
  @ApiProperty({
    type: GatherResourceClass
  })
  class: GatherResourceClass;
  @ApiProperty()
  rarity: number;
  @ApiProperty({enum: GatheringResourceTypeEnums})
  type: GatheringResourceTypeEnums
}

