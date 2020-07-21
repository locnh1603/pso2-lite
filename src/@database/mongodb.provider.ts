import * as mongoose from 'mongoose';
import { MongoDbEnums } from 'src/shared/enum/mongodb.enum';

export const databaseProviders = [
  {
    provide: MongoDbEnums.ConnectionToken,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DB_URL, {
        useFindAndModify: false,
        useCreateIndex: true
      }).then((con) => {
        console.log('Connect success');
        return con;
      }),
  },
];