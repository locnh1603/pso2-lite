import * as mongoose from 'mongoose';
import { Controller, Get, Post, Body, UseGuards, Param, Delete, Put } from '@nestjs/common';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.service';
import { ApiBody, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { GatherCuisineDto } from 'src/shared/dto/gather-cuisine-dto.model';
import { GatherCuisine } from 'src/shared/schemas/gather-cuisine.schema';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';
import { RequestParamNameTransformPipe, RequestDataNameTransformPipe } from 'src/shared/pipes/request-name-data-transform.pipe';
import { RequestRecipeGuard } from 'src/shared/guards/request-recipe.guard';

@Controller('gather-cuisines')
export class GatherCuisineController {
  // constructor(private gatherCuisineService: GatherCuisineService) {}
  // @Get()
  // @ApiResponse({status: 201, type: [GatherCuisine]})
  // findAll(): Promise<GatherCuisine[]> {
  //   return this.gatherCuisineService.findAll();
  // }

  // @Get(':name')
  // @ApiResponse({status: 201, type: GatherCuisine})
  // findOne(@Param('name', new RequestParamNameTransformPipe()) name: string): Promise<GatherCuisine> {
  //   return this.gatherCuisineService.findOne(name);
  // }
  
  // @UseGuards(RequestValidatorGuard, RequestRecipeGuard)
  // @Post()
  // @ApiBody({type: GatherCuisineDto})
  // @ApiResponse({status: 201, type: GatherCuisine})
  // create(@Body(new RequestDataNameTransformPipe()) cuisine: GatherCuisineDto): Promise<GatherCuisine> {
  //   return this.gatherCuisineService.create(cuisine);
  // }

  // @Delete(':name')
  // @ApiResponse({status: 201, type: GatherCuisine})
  // delete(@Param('name', new RequestParamNameTransformPipe()) name: string): Promise<GatherCuisine> {
  //   return this.gatherCuisineService.delete(name);
  // }

  // @UseGuards(RequestValidatorGuard)
  // @Put(':name')
  // @ApiResponse({status: 201, type: GatherCuisine})
  // update(@Param('name', new RequestParamNameTransformPipe()) name: string, @Body(new RequestDataNameTransformPipe()) cuisine: GatherCuisineDto): Promise<GatherCuisine> {
  //   return this.gatherCuisineService.update(name, cuisine);
  // }
}