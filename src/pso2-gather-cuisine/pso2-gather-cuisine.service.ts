import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GatherCuisine, GatherCuisineSchema } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.interface';

@Injectable()
export class GatherCuisineService {
  private readonly GatherCuisineModel = mongoose.model('pso2-gather-lite.cuisines', GatherCuisineSchema)

  create(cuisine: GatherCuisine): Promise<mongoose.Document> {
    cuisine.name = cuisine.name.toLowerCase();
    cuisine.recipe = cuisine.recipe.map(i => {
      const newIng = i;
      newIng.resource = newIng.resource.toLowerCase();
      return newIng;
    })
    const document = new this.GatherCuisineModel(cuisine);
    return document.save()
  }

  findAll(): Promise<mongoose.Document[]> {
    return this.GatherCuisineModel.find({}).exec();
  }
}