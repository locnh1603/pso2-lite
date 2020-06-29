import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GatherResouceSchema, GatherResource } from 'src/pso2-gather-resource/pso2-gather-resources.interface';
import { GatherQueryDto } from 'src/pso2-gather-query/pso2-gather-query.interface';
import { GatherCuisineSchema } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.interface';

@Injectable()
export class GatherQueryService {
  private resourcesList: GatherResource[] = [];
  private readonly GatherResourceModel = mongoose.model('pso2-gather-lite.resources', GatherResouceSchema)
  private readonly GatherCuisineModel = mongoose.model('pso2-gather-lite.cuisines', GatherCuisineSchema)

  query(queryDto: GatherQueryDto) {
    return Promise.all(
      [
        this.GatherResourceModel.find(queryDto).exec(),
        this.GatherCuisineModel.find({}).exec()
      ]
    ).then(
      ([resources, cuisines]) => {
        return {
          resources,
          cuisines
        }
      }
    )
  }
}