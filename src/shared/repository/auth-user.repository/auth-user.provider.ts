import { Connection } from 'mongoose';
import { MongoDbEnums } from 'src/shared/enum/mongodb.enum';
import { AuthUserSchema } from 'src/shared/repository/auth-user.repository/auth-user.schema';
import { AuthUserRepo } from 'src/shared/repository/auth-user.repository/auth-user.repo';
import { AuthUserMongodbRepo } from 'src/shared/repository/auth-user.repository/auth-user.mongodb.repo';

export const AuthUserCollectionProvider = {
  provide: MongoDbEnums.AuthUserCollection,
  useFactory: (connection: Connection) =>
    connection.model(MongoDbEnums.AuthUserCollection, AuthUserSchema),
  inject: [MongoDbEnums.ConnectionToken],
};

export const AuthUserRepoProvider = {
  provide: AuthUserRepo,
  useClass: AuthUserMongodbRepo,
  inject: [MongoDbEnums.AuthUserCollection],
};
