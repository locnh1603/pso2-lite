import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatherCuisineSchema, GatherCuisine } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.interface';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.service';

@Controller('gather-cuisine')
export class GatherCuisineController {
  constructor(private gatherCuisineService: GatherCuisineService) {}
  GatherResourceModel = mongoose.model('gatherCuisine', GatherCuisineSchema);

  @Get()
  findAll(): Promise<mongoose.Document[]> {
    return this.gatherCuisineService.findAll();
  }
  @Post()
  create(@Body() cuisine: GatherCuisine): Promise<mongoose.Document> {
    return this.gatherCuisineService.create(cuisine);
  }
}