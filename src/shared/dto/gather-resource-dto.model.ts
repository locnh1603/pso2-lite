import { ApiProperty } from "@nestjs/swagger";
import { GatherResourceClass } from "src/shared/dto/gather-resource-class.interface";
import { GatheringResourceTypeEnums } from "src/shared/gather-resource.enum";

export class GatherResourceDto {
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
