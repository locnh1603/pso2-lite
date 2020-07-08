import { Module } from '@nestjs/common';
import { Pso2GatherCraftService } from './pso2-gather-craft.service';
import { Pso2GatherCraftController } from './pso2-gather-craft.controller';

@Module({
  providers: [Pso2GatherCraftService],
  controllers: [Pso2GatherCraftController]
})
export class Pso2GatherCraftModule {}
