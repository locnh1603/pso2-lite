import { Module } from '@nestjs/common';
import { GatherResourceController } from 'src/pso2-gather-resource/pso2-gather-resource.controller';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';

@Module({
  controllers: [GatherResourceController],
  providers: [GatherResourceService],
})
export class GatherResourceModule {}