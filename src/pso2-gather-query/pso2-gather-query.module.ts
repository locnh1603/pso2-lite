import { Module } from '@nestjs/common';
import { GatherQueryService } from 'src/pso2-gather-query/pso2-gather-query.service';
import { GatherQueryController } from 'src/pso2-gather-query/pso2-gather-query.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ResourceQuery } from 'src/pso2-gather-query/query/gather-query.query';
import { ResourceQueryHandler } from 'src/pso2-gather-query/query/gather-query.handler';
import { GatherResourceRepoProvider, GatherResourceCollectionProvider } from 'src/pso2-gather-resource/repo';
import { GatherCraftCollectionProvider, GatherCraftRepoProvider } from 'src/pso2-gather-craft/repo';
import { GatherCuisineCollectionProvider, GatherCuisineRepoProvider } from 'src/pso2-gather-cuisine/repo';
import { GatherResourceService } from 'src/pso2-gather-resource/gather-resource.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
// import { GatherResourceSchema } from 'src/shared/schemas/gather-resource.schema';
// import { GatherCuisineSchema } from 'src/shared/schemas/gather-cuisine.schema';
// import { GatherCraftSchema } from 'src/shared/schemas/gather-craft.schema';

export const QueryHandlers = [ResourceQueryHandler]

@Module({
  imports: [
    CqrsModule
    // MongooseModule.forFeature([
    //   { name: ModuleNameEnums.gather_resource, schema: GatherResourceSchema },
    //   { name: ModuleNameEnums.gather_cuisine, schema: GatherCuisineSchema },
    //   { name: ModuleNameEnums.gather_craft, schema: GatherCraftSchema}
    // ]),
  ],
  controllers: [GatherQueryController],
  providers: [
    GatherQueryService,
    ...QueryHandlers,
    GatherResourceRepoProvider,
    GatherResourceCollectionProvider,
    GatherCraftCollectionProvider,
    GatherCraftRepoProvider,
    GatherCuisineCollectionProvider,
    GatherCuisineRepoProvider,
    GatherResourceService
  ]
})
export class GatherQueryModule { }