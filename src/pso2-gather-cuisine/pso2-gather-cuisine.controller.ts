import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GatherCuisineSchema, GatherCuisine } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.interface';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.service';
import { ApiBody, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/pso2-admin-auth/guard/auth.guard';

@Controller('gather-cuisines')
export class GatherCuisineController {
  constructor(private gatherCuisineService: GatherCuisineService) {}
  GatherResourceModel = mongoose.model('gatherCuisine', GatherCuisineSchema);

  @Get()
  @ApiResponse({status: 201, type: [GatherCuisine]})
  findAll(): Promise<mongoose.Document[]> {
    return this.gatherCuisineService.findAll();
  }
  
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({type: GatherCuisine})
  @ApiResponse({status: 201, type: GatherCuisine})
  create(@Body() cuisine: GatherCuisine): Promise<mongoose.Document> {
    return this.gatherCuisineService.create(cuisine);
  }
}