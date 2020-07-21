import { MongoDbEnums } from "src/shared/enum/mongodb.enum";
import { Model } from "mongoose";
import { Inject, Injectable } from "@nestjs/common";
import { GatherCuisineRepo } from "src/pso2-gather-cuisine/repo/gather-cuisine.repo";
import { GatherCuisineDocument } from "src/pso2-gather-cuisine/repo/gather-cuisine.document";
import { GatherCuisineDto } from "src/pso2-gather-cuisine/dto/gather-cuisine-dto.model";

@Injectable()
export class GatherCuisineMongoDbRepo implements GatherCuisineRepo {
  constructor(
    @Inject(MongoDbEnums.GatherCuisinesCollection)
    private readonly cuisineDocument: Model<GatherCuisineDocument>,
  ) { }

  async getByIdAsync(id: string): Promise<GatherCuisineDto> {
    return this.cuisineDocument.findOne({ id }).then();
  }
  async createAsync(entity: GatherCuisineDto): Promise<GatherCuisineDto> {
    return this.cuisineDocument.create(entity as any).then();
  }
  async updateAsync(entity: GatherCuisineDto): Promise<GatherCuisineDto> {
    return this.cuisineDocument.findOneAndUpdate({id: entity.id}, entity as any ,{new: true}).then();
  }
  async deleteAsync(id: string): Promise<GatherCuisineDto> {
    return this.cuisineDocument.findOneAndDelete({ id }).then();
  }
  async getAsync(): Promise<GatherCuisineDto[]> {
    return this.cuisineDocument.find({}).then();
  }
}