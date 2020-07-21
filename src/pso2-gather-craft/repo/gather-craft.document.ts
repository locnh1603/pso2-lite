import { Document } from 'mongoose'
import { GatherCraftDto } from "src/pso2-gather-craft/dto/gather-craft-dto.model";

export interface GatherCraftDocument extends GatherCraftDto, Document {
  _id: string;
  id: string;
}