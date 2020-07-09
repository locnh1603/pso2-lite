import { Module, Global } from '@nestjs/common';
import { AuthService } from './pso2-admin-auth.service';
import { Pso2AdminAuthController } from './pso2-admin-auth.controller';
import { LocalStrategy } from 'src/pso2-admin-auth/guard/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { KeyEnums } from 'src/shared/enum/pso2-lite.enum';
import { JwtStrategy } from 'src/pso2-admin-auth/guard/strategies/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { UserSchema } from 'src/shared/schemas/admin-user.schema';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: KeyEnums.skey,
      signOptions: { expiresIn: '3600s' },
    }),
    MongooseModule.forFeature([{name: ModuleNameEnums.admin_user, schema: UserSchema}])
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [Pso2AdminAuthController]
})
export class Pso2AdminAuthModule {}
