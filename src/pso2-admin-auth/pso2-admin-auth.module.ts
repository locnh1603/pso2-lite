import { Module, Global } from '@nestjs/common';
import { AuthService } from './pso2-admin-auth.service';
import { Pso2AdminAuthController } from './pso2-admin-auth.controller';
import { LocalStrategy } from 'src/pso2-admin-auth/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { KeyEnums } from 'src/shared/pso2-lite.enum';
import { JwtStrategy } from 'src/pso2-admin-auth/strategies/jwt.strategy';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: KeyEnums.skey,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService,LocalStrategy, JwtStrategy],
  controllers: [Pso2AdminAuthController]
})
export class Pso2AdminAuthModule {}
