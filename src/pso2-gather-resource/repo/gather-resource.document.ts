import { GatherResourceDto } from "src/pso2-gather-resource/dto/gather-resource-dto.model";

export interface GatherResourceDocument extends GatherResourceDto, Document{
  _id: string;
  id: string;
}