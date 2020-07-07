import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GatherResourceModule } from 'src/pso2-gather-resource/pso2-gather-resource.module';
import { GatherQueryModule } from 'src/pso2-gather-query/pso2-gather-query.module';
import { GatherCuisineModule } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.module';
import {logger } from 'src/middleware/logger.middleware';
import { GatherQueryController } from 'src/pso2-gather-query/pso2-gather-query.controller';
import { GatherResourceController } from 'src/pso2-gather-resource/pso2-gather-resource.controller';
import { GatherCuisineController } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.controller';
import { Pso2AdminUserModule } from './pso2-admin-user/pso2-admin-user.module';
import { Pso2AdminAuthModule } from './pso2-admin-auth/pso2-admin-auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    GatherResourceModule, 
    GatherQueryModule, 
    GatherCuisineModule, 
    Pso2AdminUserModule, 
    Pso2AdminAuthModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(GatherQueryController, GatherResourceController, GatherCuisineController)
  }
}
