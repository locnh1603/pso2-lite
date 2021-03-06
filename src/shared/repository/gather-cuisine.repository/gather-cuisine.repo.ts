import { GatherCuisineDto } from "src/shared/models/gather-cuisine-dto.model";

export abstract class GatherCuisineRepo {
  getAsync(): Promise<GatherCuisineDto[]> {
    return null;
  }
  getByIdAsync(id: string): Promise<GatherCuisineDto> {
    return null;
  }
  getByAnyAsync(query: string): Promise<GatherCuisineDto[]> {
    return null;
  }
  createAsync(entity: GatherCuisineDto): Promise<GatherCuisineDto> {
    return null;
  }
  updateAsync(entity: GatherCuisineDto): Promise<GatherCuisineDto> {
    return null;
  }
  deleteAsync(id: string): Promise<GatherCuisineDto> {
    return null;
  }
}