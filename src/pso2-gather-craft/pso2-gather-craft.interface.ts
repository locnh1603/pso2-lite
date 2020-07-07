import { PSO2ClassEnums } from "src/shared/gather-resource.enum";
import { CraftRecipe } from "src/shared/gather-resource-class.interface";

export interface GatherCraft {
  name: string;
  forClass: PSO2ClassEnums;
  recipe: CraftRecipe[];
}