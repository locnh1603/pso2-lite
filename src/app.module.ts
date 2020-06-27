import { Module } from '@nestjs/common';
import { GatherResourceModule } from 'src/pso2-gather-resource/pso2-gather-resource.module';

@Module({
  imports: [GatherResourceModule],
})
export class AppModule {}
