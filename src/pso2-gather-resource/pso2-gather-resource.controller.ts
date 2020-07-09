import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/pso2-admin-auth/guard/auth.guard';
import { GatherResource } from 'src/shared/schemas/gather-resource.schema';
import { GatherResourceDto } from 'src/shared/dto/gather-resource-dto.model';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';

@Controller('gather-resources')
export class GatherResourceController {
  constructor(private gatherResourceService: GatherResourceService) {}

  @Get()
  @ApiResponse({status: 201, type: [GatherResource]})
  findAll(): Promise<GatherResource[]> {
    return this.gatherResourceService.findAll();
  }

  @UseGuards(JwtAuthGuard, RequestValidatorGuard)
  @Post()
  @ApiBody({type: GatherResourceDto})
  @ApiResponse({status: 201, type: GatherResource})
  create(@Body() gatheringResource: GatherResourceDto): Promise<GatherResource> {
    return this.gatherResourceService.create(gatheringResource);
  }
}