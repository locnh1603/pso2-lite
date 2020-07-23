import { Document } from 'mongoose'
import { GatherCraftDto } from "src/shared/models/gather-craft-dto.model";

export interface GatherCraftDocument extends GatherCraftDto, Document {
  _id: string;
  id: string;
}