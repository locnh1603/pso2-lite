import { Module } from '@nestjs/common';
import { GatherQueryService } from 'src/pso2-gather-query/pso2-gather-query.service';
import { GatherQueryController } from 'src/pso2-gather-query/pso2-gather-query.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/module_name.enum';
import { GatherResourceSchema } from 'src/shared/schemas/gather-resource.schema';
import { GatherCuisineSchema } from 'src/shared/schemas/gather-cuisine.schema';
import { GatherCraftSchema } from 'src/shared/schemas/gather-craft.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModuleNameEnums.gather_resource, schema: GatherResourceSchema },
      { name: ModuleNameEnums.gather_cuisine, schema: GatherCuisineSchema },
      { name: ModuleNameEnums.gather_craft, schema: GatherCraftSchema}
    ]),
  ],
  controllers: [GatherQueryController],
  providers: [GatherQueryService],
})
export class GatherQueryModule {}