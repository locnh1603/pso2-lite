import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums } from "src/shared/gather-resource.enum";
import { GatherResource } from "src/pso2-gather-resource/pso2-gather-resources.interface";
import { GatherCuisine } from "src/pso2-gather-cuisine/pso2-gather-cuisine.interface";
import { ApiProperty } from '@nestjs/swagger';
export class GatherResourceQueryDto {
  @ApiProperty()
  name: string;
}

export class GatherCuisineQueryDto {
  @ApiProperty()
  name: string;
}

export class GatherResourceQueryResult {
  @ApiProperty({type: GatherResource})
  resource: GatherResource;
  @ApiProperty({type: [GatherCuisine]})
  buffFor: GatherCuisine[];
  @ApiProperty({type: [GatherCuisine]})
  inRecipe: GatherCuisine[]
}

export class GatherCuisineQueryResult {
  @ApiProperty({type: GatherCuisine})
  cuisine: GatherCuisine;
  @ApiProperty({type: [GatherResource]})
  buffFor: GatherResource[];
  @ApiProperty({type: [GatherResource]})
  inRecipe: GatherResource[]
}