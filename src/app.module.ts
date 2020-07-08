import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GatherResourceModule } from 'src/pso2-gather-resource/pso2-gather-resource.module';
import { GatherQueryModule } from 'src/pso2-gather-query/pso2-gather-query.module';
import { GatherCuisineModule } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Pso2AdminUserModule } from './pso2-admin-user/pso2-admin-user.module';
import { Pso2AdminAuthModule } from './pso2-admin-auth/pso2-admin-auth.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from 'src/shared/middleware/logger.middleware';
import { GatherCuisineController } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.controller';
import { GatherResourceController } from 'src/pso2-gather-resource/pso2-gather-resource.controller';
import { GatherQueryController } from 'src/pso2-gather-query/pso2-gather-query.controller';
import { GatherCraftController } from 'src/pso2-gather-craft/pso2-gather-craft.controller';
import { GatherCraftModule } from 'src/pso2-gather-craft/pso2-gather-craft.module';

@Module({
  imports: [
    GatherResourceModule, 
    GatherQueryModule, 
    GatherCuisineModule, 
    Pso2AdminUserModule, 
    Pso2AdminAuthModule,
    GatherCraftModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL),
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        GatherCuisineController,
        GatherResourceController,
        GatherQueryController,
        GatherCraftController
      );
  }
}
