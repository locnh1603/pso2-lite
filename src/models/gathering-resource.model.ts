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

  constructor () {
    this.id = '';
    this.code = '';
    this.name = '';
    this.location = '';
    this.rarity = 0;
  }
}

export class GatheringResourceClass {
  category: GatheringResourceCategoryEnums;
  size: GatheringResourceSizeEnums
}