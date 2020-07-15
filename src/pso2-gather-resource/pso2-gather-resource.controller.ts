import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body, UseGuards, Delete, Param, Put } from '@nestjs/common';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { GatherResource } from 'src/shared/schemas/gather-resource.schema';
import { GatherResourceDto } from 'src/shared/dto/gather-resource-dto.model';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';
import { RequestParamNameTransformPipe, RequestDataNameTransformPipe } from 'src/shared/pipes/request-name-data-transform.pipe';

@Controller('gather-resources')
export class GatherResourceController {
  constructor(private gatherResourceService: GatherResourceService) {}

  @Get()
  @ApiResponse({status: 201, type: [GatherResource]})
  findAll(): Promise<GatherResource[]> {
    return this.gatherResourceService.findAll();
  }

  @UseGuards(RequestValidatorGuard)
  @Post()
  @ApiBody({type: GatherResourceDto})
  @ApiResponse({status: 201, type: GatherResource})
  create(@Body() gatheringResource: GatherResourceDto): Promise<GatherResource> {
    return this.gatherResourceService.create(gatheringResource);
  }

  @Delete(':name')
  @ApiResponse({status: 201, type: GatherResource})
  delete(@Param('name', new RequestParamNameTransformPipe()) name: string): Promise<GatherResource> {
    return this.gatherResourceService.delete(name);
  }

  @Put(':name')
  @ApiResponse({status: 201, type: GatherResource})
  update(@Param('name', new RequestParamNameTransformPipe()) name: string, @Body(new RequestDataNameTransformPipe()) resource: GatherResourceDto): Promise<GatherResource> {
    return this.gatherResourceService.update(resource);
  }
}