import { Module } from '@nestjs/common';
import { GatherCraftController } from 'src/pso2-gather-craft/gather-craft.controller';
import { GatherCraftService } from 'src/pso2-gather-craft/gather-craft.service';
import { GatherCraftRepoProvider, GatherCraftCollectionProvider } from 'src/pso2-gather-craft/repo';

@Module({
  imports: [],
  providers: [GatherCraftService, GatherCraftRepoProvider, GatherCraftCollectionProvider],
  controllers: [GatherCraftController]
})
export class GatherCraftModule {}
