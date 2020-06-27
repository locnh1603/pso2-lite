import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GatheringResource } from 'src/models/gathering-resource.model';
import { GatherResouceSchema } from 'src/pso2-gather-resource/pso2-gather-resources.schema';

@Injectable()
export class GatherResourceService {
  private resourcesList: GatheringResource[] = [];
  private readonly GatherResourceModel = mongoose.model('pso2-gather-lite.resources', GatherResouceSchema)

  create(resource: GatheringResource): Promise<mongoose.Document> {
    const document = new this.GatherResourceModel(resource);
    return document.save()
  }

  findAll(): Promise<mongoose.Document[]> {
    return this.GatherResourceModel.find({}).exec();
  }
}