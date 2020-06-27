import { GatheringResourceCategoryEnums, GatheringResourceTypeEnums, GatheringResourceSizeEnums } from 'src/models/gathering-resource.enum';

export class GatheringCuisine {
  id: string;
  name: string;
  code: string;
  buff: GatheringCuisineBuffClassifier;
  madeFrom: GatheringCuisineMaterial[];

  constructor() {
    this.id = '';
    this.name = '';
    this.code = '';
    this.madeFrom = [];
  }
}

export class GatheringCuisineMaterial {
  resourceCode: string;
  amount: number;
}

export class GatheringCuisineBuffClassifier {
  category: GatheringResourceCategoryEnums;
  type: GatheringResourceTypeEnums;
  size: GatheringResourceSizeEnums;
}