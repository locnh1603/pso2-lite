import { ApiProperty } from "@nestjs/swagger";
import { GatherResourceClass, GatherResourceDto } from "src/shared/models/gather-resource-dto.model";
import { GatherCuisineDto } from "src/shared/models/gather-cuisine-dto.model";
import { GatherCraftDto } from "src/shared/models/gather-craft-dto.model";

export class GatherResourceQueryDto {
  @ApiProperty()
  query: string;
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
  @ApiProperty({type: GatherResourceDto})
  resource: GatherResourceDto;
  @ApiProperty({type: [GatherCuisineDto]})
  buffFor: GatherCuisineDto[];
  @ApiProperty({type: [GatherCuisineDto]})
  inRecipe: GatherCuisineDto[]
}

export class GatherResourceTypeQueryResult {
  @ApiProperty({type: [GatherResourceDto]})
  resources: GatherResourceDto[];
  @ApiProperty({type: [GatherCuisineDto]})
  cuisinesFor: GatherCuisineDto[];
}

export class GatherCuisineQueryResult {
  @ApiProperty({type: GatherCuisineDto})
  cuisine: GatherCuisineDto;
  @ApiProperty({type: [GatherResourceDto]})
  buffFor: GatherResourceDto[];
  @ApiProperty({type: [GatherResourceDto]})
  inRecipe: GatherResourceDto[]
}

export class GatherCraftQueryResult {
  @ApiProperty({type: GatherCraftDto})
  craft: GatherCraftDto;
  @ApiProperty({type: [GatherResourceDto]})
  inRecipe: GatherResourceDto[];
}