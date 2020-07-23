import { Module } from '@nestjs/common';
import { GatherCuisineController } from 'src/pso2-gather-cuisine/gather-cuisine.controller';
import { GatherCuisineRepoProvider, GatherCuisineCollectionProvider } from 'src/shared/repository/gather-cuisine.repository/gather-cuisine.provider';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/gather-cuisine.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  controllers: [GatherCuisineController],
  providers: [GatherCuisineService ,GatherCuisineRepoProvider, GatherCuisineCollectionProvider],
})
export class GatherCuisineModule {}