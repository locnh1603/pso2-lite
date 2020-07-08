import { Module } from '@nestjs/common';
import { GatherResourceController } from 'src/pso2-gather-resource/pso2-gather-resource.controller';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';
import { Pso2AdminAuthModule } from 'src/pso2-admin-auth/pso2-admin-auth.module';

@Module({
  controllers: [GatherResourceController],
  providers: [GatherResourceService],
})
export class GatherResourceModule {}