import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GatherCuisineRepo } from 'src/shared/repository/gather-cuisine.repository/gather-cuisine.repo';
import { GatherCuisineDto } from 'src/shared/models/gather-cuisine-dto.model';

@Injectable()
export class GatherCuisineService {
  constructor(
    private cuisineRepo: GatherCuisineRepo
  ) {}

  async getAsync(): Promise<GatherCuisineDto[]> {
    return await this.cuisineRepo.getAsync();
  }

  async getByIdAsync(id: string): Promise<GatherCuisineDto> {
    return await this.cuisineRepo.getByIdAsync(id);
  }

  async createAsync(entity: GatherCuisineDto): Promise<GatherCuisineDto> {
    return await this.cuisineRepo.createAsync(entity);
  }

  async updateAsync(entity: GatherCuisineDto): Promise<GatherCuisineDto> {
    return await this.cuisineRepo.updateAsync(entity);
  }

  async deleteAsync(id: string): Promise<GatherCuisineDto> {
    return await this.cuisineRepo.deleteAsync(id);
  }
}