import { GatherCuisineDto } from "src/pso2-gather-cuisine/dto/gather-cuisine-dto.model";
import { Document } from 'mongoose'

export interface GatherCuisineDocument extends GatherCuisineDto, Document {
  _id: string;
  id: string;
}