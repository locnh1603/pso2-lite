import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums } from "src/shared/gather-resource.enum";

export interface GatherResourceClass {
  category: GatheringResourceCategoryEnums,
  size: GatheringResourceSizeEnums
}