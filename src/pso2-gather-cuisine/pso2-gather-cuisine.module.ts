import { Module } from '@nestjs/common';
import { GatherCuisineController } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.controller';
import { GatherCuisineService } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/module_name.enum';
import { GatherCuisineSchema } from 'src/shared/schemas/gather-cuisine.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ModuleNameEnums.gather_cuisine, schema: GatherCuisineSchema }])],
  controllers: [GatherCuisineController],
  providers: [GatherCuisineService],
})
export class GatherCuisineModule {}