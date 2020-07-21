import { Connection } from 'mongoose';
import { MongoDbEnums } from 'src/shared/enum/mongodb.enum';
import { GatherCuisineRepo } from 'src/pso2-gather-cuisine/repo/gather-cuisine.repo';
import { GatherCuisineMongoDbRepo } from 'src/pso2-gather-cuisine/repo/gather-cuisine.mongodb.repo';
import { GatherCuisineSchema } from 'src/pso2-gather-cuisine/repo/gather-cuisine.schema';

export const GatherCuisineCollectionProvider = {
  provide: MongoDbEnums.GatherCuisinesCollection,
  useFactory: (connection: Connection) =>
    connection.model(MongoDbEnums.GatherCuisinesCollection, GatherCuisineSchema),
  inject: [MongoDbEnums.ConnectionToken],
};

export const GatherCuisineRepoProvider = {
  provide: GatherCuisineRepo,
  useClass: GatherCuisineMongoDbRepo,
  inject: [MongoDbEnums.GatherCuisinesCollection],
};
