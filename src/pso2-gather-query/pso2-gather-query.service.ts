import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GatherResouceSchema, GatherResource } from 'src/pso2-gather-resource/pso2-gather-resources.interface';
import { GatherQueryDto } from 'src/pso2-gather-query/pso2-gather-query.interface';

@Injectable()
export class GatherQueryService {
  private resourcesList: GatherResource[] = [];
  private readonly GatherResourceModel = mongoose.model('pso2-gather-lite.resources', GatherResouceSchema)

  query(queryDto: GatherQueryDto): Promise<mongoose.Document[]> {
    return this.GatherResourceModel.find(queryDto).exec();
  }
}