import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.service';
import { ApiBody, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/pso2-admin-auth/guard/auth.guard';
import { GatherCuisineDto } from 'src/shared/dto/gather-cuisine-dto.model';
import { GatherCuisine } from 'src/shared/schemas/gather-cuisine.schema';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';

@Controller('gather-cuisines')
export class GatherCuisineController {
  constructor(private gatherCuisineService: GatherCuisineService) {}
  @Get()
  @ApiResponse({status: 201, type: [GatherCuisine]})
  findAll(): Promise<GatherCuisine[]> {
    return this.gatherCuisineService.findAll();
  }
  
  @UseGuards(JwtAuthGuard, RequestValidatorGuard)
  @Post()
  @ApiBody({type: GatherCuisineDto})
  @ApiResponse({status: 201, type: GatherCuisine})
  create(@Body() cuisine: GatherCuisineDto): Promise<GatherCuisine> {
    return this.gatherCuisineService.create(cuisine);
  }
}