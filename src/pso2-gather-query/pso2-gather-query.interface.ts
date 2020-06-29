import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums } from "src/shared/gather-resource.enum";

export interface GatherQueryDto {
  name: string;
  location: string;
  region: string;
  class: GatherResourceClass;
  type: string;
}

interface GatherResourceClass {
  category: GatheringResourceCategoryEnums;
  size: GatheringResourceSizeEnums
}