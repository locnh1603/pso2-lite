import { ApiProperty } from "@nestjs/swagger";
import { GatherResource } from "src/shared/schemas/gather-resource.schema";
import { GatherCuisine } from "src/shared/schemas/gather-cuisine.schema";
import { GatherCraft } from "src/shared/schemas/gather-craft.schema";
import { GatherResourceClass } from "src/shared/dto/gather-resource-class.interface";

export class GatherResourceQueryDto {
  @ApiProperty()
  name: string;
}

export class GatherCuisineQueryDto {
  @ApiProperty()
  name: string;
}

export class GatherCraftQueryDto {
  @ApiProperty()
  name: string;
}

export class GatherResourceTypeQueryDto {
  @ApiProperty({type: GatherResourceClass})
  class: GatherResourceClass;
}

export class GatherResourceQueryResult {
  @ApiProperty({type: GatherResource})
  resource: GatherResource;
  @ApiProperty({type: [GatherResource]})
  buffFor: GatherCuisine[];
  @ApiProperty({type: [GatherResource]})
  inRecipe: GatherCuisine[]
}

export class GatherResourceTypeQueryResult {
  @ApiProperty({type: [GatherResource]})
  resources: GatherResource[];
  @ApiProperty({type: [GatherCuisine]})
  cuisinesFor: GatherCuisine[];
}

export class GatherCuisineQueryResult {
  @ApiProperty({type: GatherCuisine})
  cuisine: GatherCuisine;
  @ApiProperty({type: [GatherResource]})
  buffFor: GatherResource[];
  @ApiProperty({type: [GatherResource]})
  inRecipe: GatherResource[]
}

export class GatherCraftQueryResult {
  @ApiProperty({type: GatherCraft})
  craft: GatherCraft;
  @ApiProperty({type: [GatherResource]})
  inRecipe: GatherResource[];
}