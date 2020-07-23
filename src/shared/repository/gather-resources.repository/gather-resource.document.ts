import { GatherResourceDto } from "src/shared/models/gather-resource-dto.model";
import { Document } from 'mongoose'

export interface GatherResourceDocument extends GatherResourceDto, Document{
  _id: string;
  id: string;
}