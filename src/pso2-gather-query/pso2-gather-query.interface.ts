import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums } from "src/models/gathering-resource.enum";

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