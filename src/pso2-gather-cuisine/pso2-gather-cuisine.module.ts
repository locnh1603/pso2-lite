import { Module } from '@nestjs/common';
import { GatherCuisineController } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.controller';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.service';

@Module({
  controllers: [GatherCuisineController],
  providers: [GatherCuisineService],
})
export class GatherCuisineModule {}