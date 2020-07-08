import { Module } from '@nestjs/common';
import { GatherResourceModule } from 'src/pso2-gather-resource/pso2-gather-resource.module';
import { GatherQueryModule } from 'src/pso2-gather-query/pso2-gather-query.module';
import { GatherCuisineModule } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.module';
// import {logger } from 'src/middleware/logger.middleware';
import { Pso2AdminUserModule } from './pso2-admin-user/pso2-admin-user.module';
import { Pso2AdminAuthModule } from './pso2-admin-auth/pso2-admin-auth.module';
import { ConfigModule } from '@nestjs/config';
import { Pso2GatherCraftModule } from './pso2-gather-craft/pso2-gather-craft.module';

@Module({
  imports: [
    GatherResourceModule, 
    GatherQueryModule, 
    GatherCuisineModule, 
    Pso2AdminUserModule, 
    Pso2AdminAuthModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    Pso2GatherCraftModule
  ]
})
export class AppModule {
}
