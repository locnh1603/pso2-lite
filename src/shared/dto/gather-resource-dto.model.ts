import { ApiProperty } from "@nestjs/swagger";
import { GatherResourceClass } from "src/shared/dto/gather-resource-class.interface";
import { GatheringResourceTypeEnums } from "src/shared/enum/gather-resource.enum";
import { v4 } from 'uuid'

export class GatherResourceDto                                                                                                                                                                                                                                                                                                        
{ 
  @ApiProperty({
    type: String
  })
  id: string;
  @ApiProperty({
    type: String
  })
  name: string;
  @ApiProperty({
    type: String
  })
  icon: string;
  @ApiProperty({
    type: [String]
  })
  region: string[];
  @ApiProperty({
    type: [String]
  })
  location: string[];
  @ApiProperty({
    type: GatherResourceClass
  })
  class: GatherResourceClass;
  @ApiProperty({
    type: Number
  })
  rarity: number;
  @ApiProperty({enum: GatheringResourceTypeEnums})
  type: GatheringResourceTypeEnums
}
