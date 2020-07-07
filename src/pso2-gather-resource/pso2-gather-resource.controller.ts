import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';
import { GatherResouceSchema, GatherResource } from 'src/pso2-gather-resource/pso2-gather-resources.interface';
import { ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('gather-resources')
export class GatherResourceController {
  constructor(private gatherResourceService: GatherResourceService) {}
  GatherResourceModel = mongoose.model('GatherResource', GatherResouceSchema);

  @Get()
  @ApiResponse({status: 201, type: [GatherResource]})
  findAll(): Promise<mongoose.Document[]> {
    return this.gatherResourceService.findAll();
  }


  @Post()
  @ApiBody({type: GatherResource})
  @ApiResponse({status: 201, type: GatherResource})
  create(@Body() gatheringResource: GatherResource): Promise<mongoose.Document> {
    return this.gatherResourceService.create(gatheringResource);
  }
}