import { ApiProperty } from "@nestjs/swagger";
import { GatherResource } from "src/shared/schemas/gather-resource.schema";
import { GatherCuisine } from "src/shared/schemas/gather-cuisine.schema";

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
  @ApiProperty({type: [GatherResource]})
  buffFor: GatherCuisine[];
  @ApiProperty({type: [GatherResource]})
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