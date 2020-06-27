import { GatheringResourceCategoryEnums, GatheringResourceSizeEnums, GatheringResourceTypeEnums } from "./gathering-resource.enum";

export class GatheringResource {
  id: string;
  code: string;
  name: string;
  location: string;
  class: GatheringResourceClass;
  rarity: number;
  usedIn: {
    food: string,
    order: string,
    craft: string
  }
  type: GatheringResourceTypeEnums
}

export class GatheringResourceClass {
  category: GatheringResourceCategoryEnums;
  size: GatheringResourceSizeEnums
}