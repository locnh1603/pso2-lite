import { GatherCraftDto } from "src/pso2-gather-craft/dto/gather-craft-dto.model";

export abstract class GatherCraftRepo {
  getAsync(): Promise<GatherCraftDto[]> {
    return null;
  }
  getByIdAsync(id: string): Promise<GatherCraftDto> {
    return null;
  }
  createAsync(entity: GatherCraftDto): Promise<GatherCraftDto> {
    return null;
  }
  updateAsync(entity: GatherCraftDto): Promise<GatherCraftDto> {
    return null;
  }
  deleteAsync(id: string): Promise<GatherCraftDto> {
    return null;
  }
}