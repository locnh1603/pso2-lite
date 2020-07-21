import { Module, Global } from '@nestjs/common';
import { databaseProviders } from 'src/@database/mongodb.provider';

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}