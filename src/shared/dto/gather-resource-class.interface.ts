import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums } from "src/shared/enum/gather-resource.enum";
import { ApiProperty } from "@nestjs/swagger";

export class GatherResourceClass {
  @ApiProperty({enum: GatheringResourceCategoryEnums})
  category: GatheringResourceCategoryEnums;
  @ApiProperty({enum: GatheringResourceSizeEnums})
  size: GatheringResourceSizeEnums
}


export class CraftRecipe {
  @ApiProperty()
  resource: string;
  @ApiProperty()
  amount: number;
}