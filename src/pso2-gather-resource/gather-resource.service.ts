import { GatherResourceRepo } from "src/shared/repository/gather-resources.repository";
import { Injectable } from "@nestjs/common";
import { GatherResourceDto } from "src/shared/models/gather-resource-dto.model";

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

  async getByAnyAsync(query: string): Promise<GatherResourceDto[]> {
    return await this.gatherResourceRepo.getByAnyAsync(query);
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