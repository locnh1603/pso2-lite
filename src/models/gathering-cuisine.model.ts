import { GatheringResourceClass } from "./gathering-resource.model";

export class GatheringCuisine {
  id: string;
  name: string;
  code: string;
  buff: GatheringResourceClass
  madeFrom: GatheringCuisineMaterial[];
}

export class GatheringCuisineMaterial {
  resourceCode: string;
  amount: number;
}