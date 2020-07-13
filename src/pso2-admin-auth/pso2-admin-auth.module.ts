import { Module, Global } from '@nestjs/common';
import { AuthService } from './pso2-admin-auth.service';
import { Pso2AdminAuthController } from './pso2-admin-auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { UserSchema } from 'src/shared/schemas/admin-user.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{name: ModuleNameEnums.admin_user, schema: UserSchema}])
  ],
  providers: [AuthService],
  controllers: [Pso2AdminAuthController]
})
export class Pso2AdminAuthModule {}
