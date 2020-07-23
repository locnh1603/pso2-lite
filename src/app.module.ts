import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GatherResourceModule } from 'src/pso2-gather-resource/gather-resource.module';
import { GatherQueryModule } from 'src/pso2-gather-query/gather-query.module';
import { GatherCuisineModule } from 'src/pso2-gather-cuisine/gather-cuisine.module';
import { LoggerMiddleware } from 'src/shared/middleware/logger.middleware';
import { GatherCuisineController } from 'src/pso2-gather-cuisine/gather-cuisine.controller';
import { GatherResourceController } from 'src/pso2-gather-resource/gather-resource.controller';
import { GatherCraftController } from 'src/pso2-gather-craft/gather-craft.controller';
import { GatherCraftModule } from 'src/pso2-gather-craft/gather-craft.module';
import { RequestValidatorGuard } from 'src/shared/guards/request-validator.guard';
import { RequestRecipeGuard } from 'src/shared/guards/request-recipe.guard';
import { DatabaseModule } from 'src/@database/mongodb.module';
import { AuthUserModule } from 'src/pso2-auth-user/auth-user.module';
import JwtAuthenticationGuard from 'src/shared/guards/authentication.guard';
import { JwtStrategy } from 'src/shared/guards/authentication.strategy';

@Module({
  imports: [
    GatherResourceModule,
    GatherCuisineModule,
    GatherCraftModule,
    GatherQueryModule,
    AuthUserModule,
    DatabaseModule
  ],
  providers: [
    RequestValidatorGuard,
    RequestRecipeGuard,
    JwtAuthenticationGuard,
    JwtStrategy
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        GatherCuisineController,
        GatherResourceController,
        GatherCraftController
      )
  }
}
