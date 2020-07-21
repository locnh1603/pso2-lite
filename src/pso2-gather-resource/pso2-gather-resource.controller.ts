import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body, UseGuards, Delete, Param, Put } from '@nestjs/common';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { GatherResource } from 'src/shared/schemas/gather-resource.schema';
import { GatherResourceDto } from 'src/pso2-gather-resource/dto/gather-resource-dto.model';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';
import { RequestParamNameTransformPipe, RequestDataNameTransformPipe } from 'src/shared/pipes/request-name-data-transform.pipe';
import { v4 } from 'uuid';

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
    gatheringResource.id = (v4().toString());
    return this.gatherResourceService.create(gatheringResource);
  }

  @Delete(':id')
  @ApiResponse({status: 201, type: GatherResource})
  delete(@Param('id') id: string): Promise<GatherResource> {
    return this.gatherResourceService.delete(id);
  }

  @UseGuards(RequestValidatorGuard)
  @Put(':id')
  @ApiResponse({status: 201, type: GatherResource})
  update(@Param('id') id: string, @Body(new RequestDataNameTransformPipe()) resource: GatherResourceDto): Promise<GatherResource> {
    return this.gatherResourceService.update(id, resource);
  }
}