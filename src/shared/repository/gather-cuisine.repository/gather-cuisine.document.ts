import { GatherCuisineDto } from "src/shared/models/gather-cuisine-dto.model";
import { Document } from 'mongoose'

export interface GatherCuisineDocument extends GatherCuisineDto, Document {
  _id: string;
  id: string;
}