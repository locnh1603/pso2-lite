import { GatherResourceRepo } from "src/shared/repository/gather-resources.repository/gather-resource.repo";
import { MongoDbEnums } from "src/shared/enum/mongodb.enum";
import { GatherResourceDocument } from "src/shared/repository/gather-resources.repository/gather-resource.document";
import { Model } from "mongoose";
import { Inject, Injectable } from "@nestjs/common";
import { GatherResourceDto } from "src/shared/models/gather-resource-dto.model";

@Injectable()
export class GatherResourceMongoDbRepo implements GatherResourceRepo {
  constructor(
    @Inject(MongoDbEnums.GatherResourceCollection)
    private readonly gatherResDocument: Model<GatherResourceDocument>,
  ) { }
  async getByAnyAsync(query: string): Promise<GatherResourceDto[]> {
    return this.gatherResDocument.find({
      $or: [
        { name: {$regex: query}},
        { type: {$regex: query}}
      ]
    }).then();
  }
  async getByIdAsync(id: string): Promise<GatherResourceDto> {
    return this.gatherResDocument.findOne({ id }).then();
  }
  async createAsync(entity: GatherResourceDto): Promise<GatherResourceDto> {
    return this.gatherResDocument.create(entity as any).then();
  }
  async updateAsync(entity: GatherResourceDto): Promise<GatherResourceDto> {
    return this.gatherResDocument.findOneAndUpdate({id: entity.id}, entity as any ,{new: true}).then();
  }
  async deleteAsync(id: string): Promise<GatherResourceDto> {
    return this.gatherResDocument.findOneAndDelete({ id }).then();
  }
  async getAsync(): Promise<GatherResourceDto[]> {
    return this.gatherResDocument.find({}).then();
  }
}