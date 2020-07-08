import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GatherResouceSchema, GatherResource } from 'src/pso2-gather-resource/pso2-gather-resources.interface';

@Injectable()
export class GatherResourceService {
  private readonly GatherResourceModel = mongoose.model('pso2-gather-lite.resources', GatherResouceSchema)

  create(resource: GatherResource): Promise<mongoose.Document> {
    resource.name = resource.name.toLowerCase();
    const document = new this.GatherResourceModel(resource);
    return document.save()
  }

  findAll(): Promise<mongoose.Document[]> {
    return this.GatherResourceModel.find({}).exec();
  }
}