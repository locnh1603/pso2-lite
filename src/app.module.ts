import { Module } from '@nestjs/common';
import { GatherResourceModule } from 'src/pso2-gather-resource/pso2-gather-resource.module';
import { GatherQueryModule } from 'src/pso2-gather-query/pso2-gather-query.module';
import { GatherCuisineModule } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.module';

@Module({
  imports: [GatherResourceModule, GatherQueryModule, GatherCuisineModule],
})
export class AppModule {}
