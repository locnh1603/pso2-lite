import { Module } from '@nestjs/common';
import { GatherResourceController } from 'src/pso2-gather-resource/gather-resource.controller';
import { GatherResourceCollectionProvider, GatherResourceRepoProvider } from 'src/pso2-gather-resource/repo';
import { GatherResourceService } from 'src/pso2-gather-resource/gather-resource.service';

@Module({
  // imports: [MongooseModule.forFeature([{ name: ModuleNameEnums.gather_resource, schema: GatherResourceSchema }])],
  controllers: [GatherResourceController],
  providers: [GatherResourceService, GatherResourceCollectionProvider, GatherResourceRepoProvider],
})
export class GatherResourceModule {}