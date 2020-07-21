import { Controller, Get, Param, UseGuards, Post, Body, Delete, Patch, Put } from '@nestjs/common';
import { GatherResourceService } from 'src/pso2-gather-resource/gather-resource.service';
import { GatherResourceDto } from 'src/pso2-gather-resource/dto/gather-resource-dto.model';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { v4 } from 'uuid';

@Controller('gather-resources')
export class GatherResourceController {
  constructor(
    private gatherResourceService: GatherResourceService
  ) {}

  @Get()
  @ApiResponse({status: 201, type: [GatherResourceDto]})
  async findAll(): Promise<GatherResourceDto[]> {
    return await this.gatherResourceService.getAsync();
  }

  @Get(':id')
  @ApiResponse({status: 201, type: GatherResourceDto})
  async findById(@Param('id') id: string): Promise<GatherResourceDto> {
    return await this.gatherResourceService.getByIdAsync(id);
  }

  @Post()
  @ApiBody({type: GatherResourceDto})
  @ApiResponse({status: 201, type: GatherResourceDto})
  create(@Body() entity: GatherResourceDto): Promise<GatherResourceDto> {
    return this.gatherResourceService.createAsync(entity);
  }

  @Delete(':id')
  @ApiResponse({status: 201, type: GatherResourceDto})
  delete(@Param('id') id: string): Promise<GatherResourceDto> {
    return this.gatherResourceService.deleteAsync(id);
  }

  @Put(':id')
  @ApiResponse({status: 201, type: GatherResourceDto})
  update(@Param('id') id: string, @Body() entity: GatherResourceDto): Promise<GatherResourceDto> {
    if (!entity.id || entity.id !== id) {
      entity.id = id;
    }
    return this.gatherResourceService.updateAsync(entity);
  }
}