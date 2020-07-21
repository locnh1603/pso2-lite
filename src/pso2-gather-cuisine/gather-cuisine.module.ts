import { Module } from '@nestjs/common';
import { GatherCuisineController } from 'src/pso2-gather-cuisine/gather-cuisine.controller';
import { GatherCuisineRepoProvider, GatherCuisineCollectionProvider } from 'src/pso2-gather-cuisine/repo/gather-cuisine.provider';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/gather-cuisine.service';

@Module({
  imports: [],
  controllers: [GatherCuisineController],
  providers: [GatherCuisineService ,GatherCuisineRepoProvider, GatherCuisineCollectionProvider],
})
export class GatherCuisineModule {}