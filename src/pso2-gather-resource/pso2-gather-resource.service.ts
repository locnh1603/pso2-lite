import * as mongoose from 'mongoose';
import { GatherResouceSchema } from 'src/schemas/pso2-gather-resources.schema';
import { Injectable } from '@nestjs/common';
import { GatheringResource } from 'src/models/gathering-resource.model';

@Injectable()
export class GatherResourceService {
  private resourcesList: GatheringResource[] = [];
  private readonly GatherResourceModel = mongoose.model('pso2-gather-lite.resources', GatherResouceSchema)

  create(resource: GatheringResource) {
    const document = new this.GatherResourceModel(resource);
    return document.save()
  }

  findAll() {
    return this.GatherResourceModel.find({}).exec();
  }
}