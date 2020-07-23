import { Module } from '@nestjs/common';
import { GatherResourceController } from 'src/pso2-gather-resource/gather-resource.controller';
import { GatherResourceCollectionProvider, GatherResourceRepoProvider } from 'src/shared/repository/gather-resources.repository';
import { GatherResourceService } from 'src/pso2-gather-resource/gather-resource.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/shared/guards/authentication.strategy';

@Module({
  imports: [
    PassportModule
  ],
  controllers: [GatherResourceController],
  providers: [GatherResourceService, GatherResourceCollectionProvider, GatherResourceRepoProvider],
})
export class GatherResourceModule {}