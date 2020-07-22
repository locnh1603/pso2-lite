
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ResourceQuery } from 'src/pso2-gather-query/query/gather-query.query';
import { GatherResourceRepo } from 'src/pso2-gather-resource/repo';
import { GatherCraftRepo } from 'src/pso2-gather-craft/repo';
import { GatherResourceService } from 'src/pso2-gather-resource/gather-resource.service';

@QueryHandler(ResourceQuery)
export class ResourceQueryHandler implements IQueryHandler<ResourceQuery> {
  constructor(
    private readonly resourceService: GatherResourceService,
    private readonly craftRepo: GatherCraftRepo
  ) {}

  async execute(query: ResourceQuery) {
    return this.resourceService.getByAnyAsync(query.query).then(res => {
      console.log(res);
      return res;
    });
  }
}