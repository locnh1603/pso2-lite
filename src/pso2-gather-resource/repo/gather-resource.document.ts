import { GatherResourceDto } from "src/pso2-gather-resource/dto/gather-resource-dto.model";
import { Document } from 'mongoose'

export interface GatherResourceDocument extends GatherResourceDto, Document{
  _id: string;
  id: string;
}