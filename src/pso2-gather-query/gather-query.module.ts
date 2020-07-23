import { Module } from '@nestjs/common';
import { GatherQueryController } from 'src/pso2-gather-query/gather-query.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ResourceQueryHandler } from 'src/pso2-gather-query/queries/gather-query.handler';
import { GatherResourceRepoProvider, GatherResourceCollectionProvider } from 'src/shared/repository/gather-resources.repository';
import { GatherCraftCollectionProvider, GatherCraftRepoProvider } from 'src/shared/repository/gather-craft.repository';
import { GatherCuisineCollectionProvider, GatherCuisineRepoProvider } from 'src/shared/repository/gather-cuisine.repository';

export const QueryHandlers = [ResourceQueryHandler]

@Module({
  imports: [
    CqrsModule
  ],
  controllers: [GatherQueryController],
  providers: [
    ...QueryHandlers,
    GatherResourceRepoProvider,
    GatherResourceCollectionProvider,
    GatherCraftCollectionProvider,
    GatherCraftRepoProvider,
    GatherCuisineCollectionProvider,
    GatherCuisineRepoProvider
  ]
})
export class GatherQueryModule { }