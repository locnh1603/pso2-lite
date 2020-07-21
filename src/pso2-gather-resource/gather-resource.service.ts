import { GatherResourceRepo } from "src/pso2-gather-resource/repo";
import { Injectable } from "@nestjs/common";
import { GatherResourceDto } from "src/pso2-gather-resource/dto/gather-resource-dto.model";

@Injectable()
export class GatherResourceService {
  constructor(
    private readonly gatherResourceRepo: GatherResourceRepo,
  ) { }

  async getAsync(): Promise<GatherResourceDto[]> {
    return await this.gatherResourceRepo.getAsync();
  }

  async getByIdAsync(id: string): Promise<GatherResourceDto> {
    return await this.gatherResourceRepo.getByIdAsync(id);
  }

  async createAsync(entity: GatherResourceDto): Promise<GatherResourceDto> {
    return await this.gatherResourceRepo.createAsync(entity);
  }

  async updateAsync(entity: GatherResourceDto): Promise<GatherResourceDto> {
    return await this.gatherResourceRepo.updateAsync(entity);
  }

  async deleteAsync(id: string): Promise<GatherResourceDto> {
    return await this.gatherResourceRepo.deleteAsync(id);
  }
}