import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatherResouceSchema, GatherResource } from 'src/pso2-gather-resource/pso2-gather-resources.interface';
import { GatherQueryService } from 'src/pso2-gather-query/pso2-gather-query.service';
import { GatherResourceQueryDto, GatherCuisineQueryDto, GatherResourceQueryResult, GatherCuisineQueryResult } from 'src/pso2-gather-query/pso2-gather-query.interface';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('gather-query')
export class GatherQueryController {
  constructor(private queryService: GatherQueryService) {}
  GatherResourceModel = mongoose.model('GatherResource', GatherResouceSchema);

  @Post('resource')
  @ApiBody({type: GatherResourceQueryDto})
  @ApiResponse({status: 201, type: GatherResourceQueryResult})
  queryResource(@Body() queryDto: GatherResourceQueryDto) {
    return this.queryService.queryResource(queryDto);
  }

  @Post('cuisine')
  @ApiBody({type: GatherCuisineQueryDto})
  @ApiResponse({status: 201, type: GatherCuisineQueryResult})
  queryCuisine(@Body() queryDto: GatherCuisineQueryDto) {
    return this.queryService.queryCuisine(queryDto);
  }
}