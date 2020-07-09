import { Module } from '@nestjs/common';
import { GatherResourceController } from 'src/pso2-gather-resource/pso2-gather-resource.controller';
import { GatherResourceService } from 'src/pso2-gather-resource/pso2-gather-resource.service';
import { Pso2AdminAuthModule } from 'src/pso2-admin-auth/pso2-admin-auth.module';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { MongooseModule } from '@nestjs/mongoose';
import { GatherResourceSchema } from 'src/shared/schemas/gather-resource.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ModuleNameEnums.gather_resource, schema: GatherResourceSchema }])],
  controllers: [GatherResourceController],
  providers: [GatherResourceService],
})
export class GatherResourceModule {}