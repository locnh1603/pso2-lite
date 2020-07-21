import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GatherResourceModule } from 'src/pso2-gather-resource/gather-resource.module';
import { GatherQueryModule } from 'src/pso2-gather-query/pso2-gather-query.module';
import { GatherCuisineModule } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from 'src/shared/middleware/logger.middleware';
import { GatherCuisineController } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.controller';
import { GatherResourceController } from 'src/pso2-gather-resource/gather-resource.controller';
import { GatherQueryController } from 'src/pso2-gather-query/pso2-gather-query.controller';
import { GatherCraftController } from 'src/pso2-gather-craft/pso2-gather-craft.controller';
import { GatherCraftModule } from 'src/pso2-gather-craft/pso2-gather-craft.module';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';
import { RequestDataNameTransformPipe, RequestParamNameTransformPipe } from 'src/shared/pipes/request-name-data-transform.pipe';
import { RequestRecipeGuard } from 'src/shared/guards/request-recipe.guard';
import { DatabaseModule } from 'src/@database/mongodb.module';

@Module({
  imports: [
    GatherResourceModule, 
    // GatherQueryModule, 
    // GatherCuisineModule,
    // GatherCraftModule,
    DatabaseModule
    // MongooseModule.forRoot(process.env.DB_URL, {
    //   useFindAndModify: false
    // }),
  ],
  providers: [
    RequestValidatorGuard,
    RequestRecipeGuard,
    RequestDataNameTransformPipe,
    RequestParamNameTransformPipe
  ]
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes(
  //       GatherCuisineController,
  //       GatherResourceController,
  //       GatherQueryController,
  //       GatherCraftController
  //     )
  // }
}
