import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GatherQueryService } from 'src/pso2-gather-query/pso2-gather-query.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { GatherResourceQueryDto, GatherResourceQueryResult, GatherCuisineQueryDto, GatherCuisineQueryResult, GatherResourceTypeQueryDto, GatherResourceTypeQueryResult, GatherCraftQueryDto, GatherCraftQueryResult } from 'src/shared/dto/gather-query-dto.model';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';

@Controller('gather-query')
export class GatherQueryController {
  constructor(private queryService: GatherQueryService) {}

  @UseGuards(RequestValidatorGuard)
  @Post('resource')
  @ApiBody({type: GatherResourceQueryDto})
  @ApiResponse({status: 201, type: GatherResourceQueryResult})
  queryResource(@Body() queryDto: GatherResourceQueryDto) {
    queryDto.name = queryDto.name.toLowerCase();
    return this.queryService.queryResource(queryDto);
  }

  @UseGuards(RequestValidatorGuard)
  @Post('cuisine')
  @ApiBody({type: GatherCuisineQueryDto})
  @ApiResponse({status: 201, type: GatherCuisineQueryResult})
  queryCuisine(@Body() queryDto: GatherCuisineQueryDto) {
    queryDto.name = queryDto.name.toLowerCase();
    return this.queryService.queryCuisine(queryDto);
  }

  @UseGuards(RequestValidatorGuard)
  @Post('type')
  @ApiBody({type: GatherResourceTypeQueryDto})
  @ApiResponse({status: 201, type: GatherResourceTypeQueryResult})
  queryType(@Body() queryDto: GatherResourceTypeQueryDto) {
    return this.queryService.queryType(queryDto);
  }

  // @UseGuards(RequestValidatorGuard)
  @Post('ring')
  @ApiBody({type: GatherCraftQueryDto})
  @ApiResponse({status: 201, type: GatherCraftQueryResult})
  queryRing(@Body() queryDto: GatherCraftQueryDto) {
    queryDto.name = queryDto.name.toLowerCase();
    return this.queryService.queryCraft(queryDto);
  }
}