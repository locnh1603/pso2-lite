import { Module } from '@nestjs/common';
import { GatherCraftController } from 'src/pso2-gather-craft/gather-craft.controller';
import { GatherCraftService } from 'src/pso2-gather-craft/gather-craft.service';
import { GatherCraftRepoProvider, GatherCraftCollectionProvider } from 'src/shared/repository/gather-craft.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule
  ],
  providers: [GatherCraftService, GatherCraftRepoProvider, GatherCraftCollectionProvider],
  controllers: [GatherCraftController]
})
export class GatherCraftModule {}
