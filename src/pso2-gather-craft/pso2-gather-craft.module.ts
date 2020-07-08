import { Module } from '@nestjs/common';
import { GatherCraftController } from 'src/pso2-gather-craft/pso2-gather-craft.controller';
import { GatherCraftService } from 'src/pso2-gather-craft/pso2-gather-craft.service';

@Module({
  providers: [GatherCraftService],
  controllers: [GatherCraftController]
})
export class GatherCraftModule {}
