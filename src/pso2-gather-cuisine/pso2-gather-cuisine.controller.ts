import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatherCuisineSchema, GatherCuisine } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.interface';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.service';
import { ApiBody, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('gather-cuisines')
export class GatherCuisineController {
  constructor(private gatherCuisineService: GatherCuisineService) {}
  GatherResourceModel = mongoose.model('gatherCuisine', GatherCuisineSchema);

  @Get()
  @ApiResponse({status: 201, type: [GatherCuisine]})
  findAll(): Promise<mongoose.Document[]> {
    return this.gatherCuisineService.findAll();
  }
  
  @Post()
  @ApiBody({type: GatherCuisine})
  @ApiResponse({status: 201, type: GatherCuisine})
  create(@Body() cuisine: GatherCuisine): Promise<mongoose.Document> {
    return this.gatherCuisineService.create(cuisine);
  }
}