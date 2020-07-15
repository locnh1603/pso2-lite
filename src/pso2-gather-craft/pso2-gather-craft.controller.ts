import { Controller, Post, Get, UseGuards, Body, Delete, Param, Put } from '@nestjs/common';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { GatherCraft } from 'src/shared/schemas/gather-craft.schema';
import { GatherCraftService } from 'src/pso2-gather-craft/pso2-gather-craft.service';
import { GatherCraftDto } from 'src/shared/dto/gather-craft-dto.model';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';
import { RequestParamNameTransformPipe, RequestDataNameTransformPipe } from 'src/shared/pipes/request-name-data-transform.pipe';

@Controller('gather-crafts')
export class GatherCraftController { 
  constructor(private craftService: GatherCraftService) {}

  @Get()
  @ApiResponse({status: 201, type: [GatherCraft]})
  findAll(): Promise<GatherCraft[]> {
    return this.craftService.findAll();
  }

  @UseGuards(RequestValidatorGuard)
  @Post()
  @ApiBody({type: GatherCraftDto})
  @ApiResponse({status: 201, type: GatherCraft})
  create(@Body() newCraft: GatherCraftDto) {
    return this.craftService.create(newCraft);
  }

  @Delete(':name')
  @ApiResponse({status: 201, type: GatherCraft})
  delete(@Param('name', new RequestParamNameTransformPipe()) name: string): Promise<GatherCraft> {
    return this.craftService.delete(name);
  }

  @UseGuards(RequestValidatorGuard)
  @Put(':name')
  @ApiResponse({status: 201, type: GatherCraft})
  update(@Param('name', new RequestParamNameTransformPipe()) name: string, @Body(new RequestDataNameTransformPipe()) resource: GatherCraft): Promise<GatherCraft> {
    return this.craftService.update(name, resource);
  }
}
