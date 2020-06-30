import { Module } from '@nestjs/common';
import { GatherQueryService } from 'src/pso2-gather-query/pso2-gather-query.service';
import { GatherQueryController } from 'src/pso2-gather-query/pso2-gather-query.controller';

@Module({
  controllers: [GatherQueryController],
  providers: [GatherQueryService],
})
export class GatherQueryModule {}