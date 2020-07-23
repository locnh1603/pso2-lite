
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ResourceQuery, GeneralQuery } from 'src/pso2-gather-query/queries/gather-query.query';
import { GatherResourceRepo } from 'src/shared/repository/gather-resources.repository';
import { GatherCraftRepo } from 'src/shared/repository/gather-craft.repository';
import { GatherResourceService } from 'src/pso2-gather-resource/gather-resource.service';
import { GatherCuisineRepo } from 'src/shared/repository/gather-cuisine.repository';

@QueryHandler(ResourceQuery)
export class ResourceQueryHandler implements IQueryHandler<ResourceQuery> {
  constructor(
    private readonly resourceRepo: GatherResourceRepo
  ) {}

  async execute(query: ResourceQuery) {
    return this.resourceRepo.getByAnyAsync(query.query).then(res => {
      console.log(res);
      return res;
    });
  }
}

@QueryHandler(GeneralQuery)
export class GeneralQueryHandler implements IQueryHandler<GeneralQuery> {
  constructor(
    private readonly resourceRepo: GatherResourceRepo,
    private readonly craftRepo: GatherCraftRepo,
    private readonly cuisineRepo: GatherCuisineRepo
  ) { }

  async execute(query: GeneralQuery) {
    return Promise.all([
      this.resourceRepo.getByAnyAsync(query.query).then(res => {
        return res;
      }),
      this.craftRepo
    ]).then() 
  }
}