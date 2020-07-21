import * as mongoose from 'mongoose';
import { MongoDbEnums } from 'src/shared/enum/mongodb.enum';
import { environments } from 'src/shared/environments/environments';

export const databaseProviders = [
  {
    provide: MongoDbEnums.ConnectionToken,
    useFactory: async (): Promise<typeof mongoose> =>
      {
        return await mongoose.connect(environments.mongodb_uri, {
          useFindAndModify: false,
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
        }).then((con) => {
          console.log('Connect success');
          return con;
        })
      }
  },
];