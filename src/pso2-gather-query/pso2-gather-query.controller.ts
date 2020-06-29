import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatherResouceSchema, GatherResource } from 'src/pso2-gather-resource/pso2-gather-resources.interface';
import { GatherQueryService } from 'src/pso2-gather-query/pso2-gather-query.service';
import { GatherQueryDto } from 'src/pso2-gather-query/pso2-gather-query.interface';

@Controller('gather-query')
export class GatherQueryController {
  constructor(private queryService: GatherQueryService) {}
  GatherResourceModel = mongoose.model('GatherResource', GatherResouceSchema);

  @Post()
  query(@Body() queryDto: GatherQueryDto) {
    return this.queryService.query(queryDto);
  } 
}