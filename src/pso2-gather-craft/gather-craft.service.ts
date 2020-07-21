import { Injectable } from '@nestjs/common';
import { GatherCraftRepo } from 'src/pso2-gather-craft/repo/gather-craft.repo';
import { GatherCraftDto } from 'src/pso2-gather-craft/dto/gather-craft-dto.model';

@Injectable()
export class GatherCraftService {
  constructor(
    private CraftRepo: GatherCraftRepo
  ) {}

  async getAsync(): Promise<GatherCraftDto[]> {
    return await this.CraftRepo.getAsync();
  }

  async getByIdAsync(id: string): Promise<GatherCraftDto> {
    return await this.CraftRepo.getByIdAsync(id);
  }

  async createAsync(entity: GatherCraftDto): Promise<GatherCraftDto> {
    return await this.CraftRepo.createAsync(entity);
  }

  async updateAsync(entity: GatherCraftDto): Promise<GatherCraftDto> {
    return await this.CraftRepo.updateAsync(entity);
  }

  async deleteAsync(id: string): Promise<GatherCraftDto> {
    return await this.CraftRepo.deleteAsync(id);
  }
}