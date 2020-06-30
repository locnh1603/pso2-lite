import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums } from "src/shared/gather-resource.enum";
import { GatherResource } from "src/pso2-gather-resource/pso2-gather-resources.interface";
import { GatherCuisine } from "src/pso2-gather-cuisine/pso2-gather-cuisine.interface";

export interface GatherResourceQueryDto {
  name: string;
  class: GatherResourceClass;
  type: string;
}

export interface GatherCuisineQueryDto {
  name: string;
}

interface GatherResourceClass {
  category: GatheringResourceCategoryEnums;
  size: GatheringResourceSizeEnums
}

export interface GatherResourceQueryResult {
  resource: GatherResource,
  buffFor: GatherCuisine[],
  inRecipe: GatherCuisine[]
}

export interface GatherCuisineQueryResult {
  cuisine: GatherCuisine,
  buffFor: GatherResource[],
  inRecipe: GatherResource[]
}