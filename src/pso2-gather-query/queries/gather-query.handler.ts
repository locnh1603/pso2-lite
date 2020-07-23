
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ResourceQuery } from 'src/pso2-gather-query/queries/gather-query.query';
import { GatherResourceRepo } from 'src/shared/repository/gather-resources.repository';
import { GatherCraftRepo } from 'src/shared/repository/gather-craft.repository';
import { GatherResourceService } from 'src/pso2-gather-resource/gather-resource.service';

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