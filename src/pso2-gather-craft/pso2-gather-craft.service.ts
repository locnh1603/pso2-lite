import { Injectable } from '@nestjs/common';
import { GatherCraft } from 'src/shared/schemas/gather-craft.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/module_name.enum';
import { Model } from 'mongoose';
import { GatherCraftDto } from 'src/shared/dto/gather-craft-dto.model';

@Injectable()
export class GatherCraftService {
  constructor(@InjectModel(ModuleNameEnums.gather_craft) private craftModel: Model<GatherCraft>) {}

  findAll(): Promise<GatherCraft[]> {
    return this.craftModel.find({}).exec();
  }

  create(newCraft: GatherCraftDto): Promise<GatherCraft> {
    newCraft.name = newCraft.name.toLowerCase();
    const document = new this.craftModel(newCraft);
    return document.save()
  }
}
