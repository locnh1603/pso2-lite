import { Module } from '@nestjs/common';
import { Pso2AdminUserService } from './pso2-admin-user.service';
import { AdminUserController } from 'src/pso2-admin-user/pso2-admin-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { UserSchema } from 'src/shared/schemas/admin-user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: ModuleNameEnums.admin_user, schema: UserSchema}])],
  providers: [Pso2AdminUserService],
  controllers: [AdminUserController]
})
export class Pso2AdminUserModule {}
