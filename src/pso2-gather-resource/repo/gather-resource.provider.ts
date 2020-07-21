import { Connection } from 'mongoose';
import { MongoDbEnums } from 'src/shared/enum/mongodb.enum';
import { GatherResourceSchema } from 'src/pso2-gather-resource/repo/gather-resource.schema';
import { GatherResourceRepo } from 'src/pso2-gather-resource/repo/gather-resource.repo';
import { GatherResourceMongoDbRepo } from 'src/pso2-gather-resource/repo/gather-resource.mongodb.repo';

export const GatherResourceCollectionProvider = {
  provide: MongoDbEnums.GatherResourceCollection,
  useFactory: (connection: Connection) =>
    connection.model(MongoDbEnums.GatherResourceCollection, GatherResourceSchema),
  inject: [MongoDbEnums.ConnectionToken],
};

export const GatherResourceRepoProvider = {
  provide: GatherResourceRepo,
  useClass: GatherResourceMongoDbRepo,
  inject: [MongoDbEnums.GatherResourceCollection],
};
