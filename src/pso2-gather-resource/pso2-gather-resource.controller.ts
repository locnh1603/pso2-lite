import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';
import { GatherResouceSchema, GatherResource } from 'src/pso2-gather-resource/pso2-gather-resources.interface';

@Controller('gather-resource')
export class GatherResourceController {
  constructor(private gatherResourceService: GatherResourceService) {}
  GatherResourceModel = mongoose.model('GatherResource', GatherResouceSchema);

  @Get()
  findAll(): Promise<mongoose.Document[]> {
    return this.gatherResourceService.findAll();
  }
  @Post()
  create(@Body() gatheringResource: GatherResource): Promise<mongoose.Document> {
    return this.gatherResourceService.create(gatheringResource);
  }
}