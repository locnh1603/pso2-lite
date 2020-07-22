import { GatherResourceDto } from "src/pso2-gather-resource/dto/gather-resource-dto.model";

export abstract class GatherResourceRepo {
  getAsync(): Promise<GatherResourceDto[]> {
    return null;
  }
  getByIdAsync(id: string): Promise<GatherResourceDto> {
    return null;
  }
  getByAnyAsync(query: string): Promise<GatherResourceDto[]> {
    return null;
  }
  createAsync(entity: GatherResourceDto): Promise<GatherResourceDto> {
    return null;
  }
  updateAsync(entity: GatherResourceDto): Promise<GatherResourceDto> {
    return null;
  }
  deleteAsync(id: string): Promise<GatherResourceDto> {
    return null;
  }
}