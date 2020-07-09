import { Controller, Post, Get, UseGuards, Body } from '@nestjs/common';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { GatherCraft } from 'src/shared/schemas/gather-craft.schema';
import { GatherCraftService } from 'src/pso2-gather-craft/pso2-gather-craft.service';
import { GatherCraftDto } from 'src/shared/dto/gather-craft-dto.model';
import { JwtAuthGuard } from 'src/pso2-admin-auth/guard/auth.guard';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';

@Controller('gather-crafts')
export class GatherCraftController { 
  constructor(private craftService: GatherCraftService) {}

  @Get()
  @ApiResponse({status: 201, type: [GatherCraft]})
  findAll(): Promise<GatherCraft[]> {
    return this.craftService.findAll();
  }

  @UseGuards(JwtAuthGuard, RequestValidatorGuard)
  @Post()
  @ApiBody({type: GatherCraftDto})
  @ApiResponse({status: 201, type: GatherCraft})
  create(@Body() newCraft: GatherCraftDto) {
    return this.craftService.create(newCraft);
  }
}
