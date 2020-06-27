import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatheringResource } from 'src/models/gathering-resource.model';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';
import { GatherResouceSchema } from 'src/pso2-gather-resource/pso2-gather-resources.schema';

@Controller('gather-resource')
export class GatherResourceController {
  constructor(private gatherResourceService: GatherResourceService) {}
  GatherResourceModel = mongoose.model('GatherResource', GatherResouceSchema);

  @Get()
  findAll(): Promise<mongoose.Document[]> {
    return this.gatherResourceService.findAll();
  }
  @Post()
  create(@Body() gatheringResource: GatheringResource): Promise<mongoose.Document> {
    return this.gatherResourceService.create(gatheringResource);
  }
}