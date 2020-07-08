import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatherQueryService } from 'src/pso2-gather-query/pso2-gather-query.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { GatherResourceQueryDto, GatherResourceQueryResult, GatherCuisineQueryDto, GatherCuisineQueryResult } from 'src/shared/dto/gather-query-dto.model';

@Controller('gather-query')
export class GatherQueryController {
  constructor(private queryService: GatherQueryService) {}

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