import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/gather-cuisine.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { GatherCuisineDto } from 'src/shared/models/gather-cuisine-dto.model';
import JwtAuthenticationGuard from 'src/shared/guards/authentication.guard';

@Controller('gather-cuisines')
export class GatherCuisineController {
  constructor(private gatherCuisineService: GatherCuisineService) {}
  @Get()
  @ApiResponse({status: 201, type: [GatherCuisineDto]})
  async findAll(): Promise<GatherCuisineDto[]> {
    return await this.gatherCuisineService.getAsync();
  }

  @Get(':id')
  @ApiResponse({status: 201, type: GatherCuisineDto})
  async findOne(@Param('id') id: string): Promise<GatherCuisineDto> {
    return await this.gatherCuisineService.getByIdAsync(id);
  }
  
  
  @Post()
  @ApiBody({type: GatherCuisineDto})
  @ApiResponse({status: 201, type: GatherCuisineDto})
  async create(@Body() entity: GatherCuisineDto): Promise<GatherCuisineDto> {
    return await this.gatherCuisineService.createAsync(entity);
  }

  
  @Delete(':id')
  @ApiResponse({status: 201, type: GatherCuisineDto})
  async delete(@Param('id') id: string): Promise<GatherCuisineDto> {
    return await this.gatherCuisineService.deleteAsync(id);
  }

  
  @Put(':id')
  @ApiResponse({status: 201, type: GatherCuisineDto})
  async update(@Param('id') id: string, @Body() entity: GatherCuisineDto): Promise<GatherCuisineDto> {
    if (!entity.id || entity.id !== id) {
      entity.id = id;
    }
    return await this.gatherCuisineService.updateAsync(entity);
  }
}