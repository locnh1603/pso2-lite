import { Module } from '@nestjs/common';
import { Pso2AdminUserService } from './pso2-admin-user.service';
import { AdminUserController } from 'src/pso2-admin-user/pso2-admin-user.controller';

@Module({
  providers: [Pso2AdminUserService],
  controllers: [AdminUserController]
})
export class Pso2AdminUserModule {}
