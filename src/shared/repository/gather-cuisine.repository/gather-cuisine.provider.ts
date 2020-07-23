import { Connection } from 'mongoose';
import { MongoDbEnums } from 'src/shared/enum/mongodb.enum';
import { GatherCuisineRepo } from 'src/shared/repository/gather-cuisine.repository/gather-cuisine.repo';
import { GatherCuisineMongoDbRepo } from 'src/shared/repository/gather-cuisine.repository/gather-cuisine.mongodb.repo';
import { GatherCuisineSchema } from 'src/shared/repository/gather-cuisine.repository/gather-cuisine.schema';

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
