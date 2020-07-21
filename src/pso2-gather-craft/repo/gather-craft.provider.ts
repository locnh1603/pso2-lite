import { Connection } from 'mongoose';
import { MongoDbEnums } from 'src/shared/enum/mongodb.enum';
import { GatherCraftRepo } from 'src/pso2-gather-craft/repo/gather-craft.repo';
import { GatherCraftMongoDbRepo } from 'src/pso2-gather-craft/repo/gather-craft.mongodb.repo';
import { GatherCraftSchema } from 'src/pso2-gather-craft/repo/gather-craft.schema';

export const GatherCraftCollectionProvider = {
  provide: MongoDbEnums.GatherCraftsCollection,
  useFactory: (connection: Connection) =>
    connection.model(MongoDbEnums.GatherCraftsCollection, GatherCraftSchema),
  inject: [MongoDbEnums.ConnectionToken],
};

export const GatherCraftRepoProvider = {
  provide: GatherCraftRepo,
  useClass: GatherCraftMongoDbRepo,
  inject: [MongoDbEnums.GatherCraftsCollection],
};
