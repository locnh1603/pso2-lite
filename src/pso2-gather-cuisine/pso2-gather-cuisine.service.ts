import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { Model } from 'mongoose';
import { GatherCuisineDto } from 'src/shared/dto/gather-cuisine-dto.model';
import { GatherCuisine } from 'src/shared/schemas/gather-cuisine.schema';

@Injectable()
export class GatherCuisineService {
  constructor(@InjectModel(ModuleNameEnums.gather_cuisine) private resourceModel: Model<GatherCuisine>) {}

  create(cuisine: GatherCuisineDto): Promise<GatherCuisine> {
    cuisine.name = cuisine.name.toLowerCase();
    cuisine.recipe = cuisine.recipe.map(i => {
      const newIng = i;
      newIng.resource = newIng.resource.toLowerCase();
      return newIng;
    })
    const document = new this.resourceModel(cuisine);
    return document.save()
  }

  findAll(): Promise<GatherCuisine[]> {
    return this.resourceModel.find({}).exec();
  }
}