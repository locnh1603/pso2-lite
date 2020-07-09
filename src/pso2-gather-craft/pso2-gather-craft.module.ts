import { Module } from '@nestjs/common';
import { GatherCraftController } from 'src/pso2-gather-craft/pso2-gather-craft.controller';
import { GatherCraftService } from 'src/pso2-gather-craft/pso2-gather-craft.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { GatherCraftSchema } from 'src/shared/schemas/gather-craft.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: ModuleNameEnums.gather_craft, schema: GatherCraftSchema}])],
  providers: [GatherCraftService],
  controllers: [GatherCraftController]
})
export class GatherCraftModule {}
