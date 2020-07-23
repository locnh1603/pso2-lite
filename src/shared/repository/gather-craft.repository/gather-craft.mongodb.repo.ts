import { MongoDbEnums } from "src/shared/enum/mongodb.enum";
import { Model } from "mongoose";
import { Inject, Injectable } from "@nestjs/common";
import { GatherCraftRepo } from "src/shared/repository/gather-craft.repository/gather-craft.repo";
import { GatherCraftDocument } from "src/shared/repository/gather-craft.repository/gather-craft.document";
import { GatherCraftDto } from "src/shared/models/gather-craft-dto.model";

@Injectable()
export class GatherCraftMongoDbRepo implements GatherCraftRepo {
  constructor(
    @Inject(MongoDbEnums.GatherCraftsCollection)
    private readonly CraftDocument: Model<GatherCraftDocument>,
  ) { }

  async getByIdAsync(id: string): Promise<GatherCraftDto> {
    return this.CraftDocument.findOne({ id }).then();
  }
  async createAsync(entity: GatherCraftDto): Promise<GatherCraftDto> {
    return this.CraftDocument.create(entity as any).then();
  }
  async updateAsync(entity: GatherCraftDto): Promise<GatherCraftDto> {
    return this.CraftDocument.findOneAndUpdate({id: entity.id}, entity as any ,{new: true}).then();
  }
  async deleteAsync(id: string): Promise<GatherCraftDto> {
    return this.CraftDocument.findOneAndDelete({ id }).then();
  }
  async getAsync(): Promise<GatherCraftDto[]> {
    return this.CraftDocument.find({}).then();
  }
}