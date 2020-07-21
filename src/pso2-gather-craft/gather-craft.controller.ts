import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GatherCraftService } from 'src/pso2-gather-craft/gather-craft.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { GatherCraftDto } from 'src/pso2-gather-craft/dto/gather-craft-dto.model';

@Controller('gather-Crafts')
export class GatherCraftController {
  constructor(private gatherCraftService: GatherCraftService) {}
  @Get()
  @ApiResponse({status: 201, type: [GatherCraftDto]})
  async findAll(): Promise<GatherCraftDto[]> {
    return await this.gatherCraftService.getAsync();
  }

  @Get(':id')
  @ApiResponse({status: 201, type: GatherCraftDto})
  async findOne(@Param('id') id: string): Promise<GatherCraftDto> {
    return await this.gatherCraftService.getByIdAsync(id);
  }
  
  @Post()
  @ApiBody({type: GatherCraftDto})
  @ApiResponse({status: 201, type: GatherCraftDto})
  async create(@Body() entity: GatherCraftDto): Promise<GatherCraftDto> {
    return await this.gatherCraftService.createAsync(entity);
  }

  @Delete(':id')
  @ApiResponse({status: 201, type: GatherCraftDto})
  async delete(@Param('id') id: string): Promise<GatherCraftDto> {
    return await this.gatherCraftService.deleteAsync(id);
  }

  @Put(':id')
  @ApiResponse({status: 201, type: GatherCraftDto})
  async update(@Param('id') id: string, @Body() entity: GatherCraftDto): Promise<GatherCraftDto> {
    if (!entity.id || entity.id !== id) {
      entity.id = id;
    }
    return await this.gatherCraftService.updateAsync(entity);
  }
}