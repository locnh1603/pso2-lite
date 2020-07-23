import { Module } from '@nestjs/common';
import { AuthUserController } from 'src/pso2-auth-user/auth-user.controller';
import { AuthUserRepoProvider, AuthUserCollectionProvider } from 'src/shared/repository/auth-user.repository';
import { LoginHandler, RegisterHandler } from 'src/pso2-auth-user/commands/auth-user.command.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { environments } from 'src/shared/environments/environments';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/shared/guards/authentication.strategy';

export const CommandHandlers = [LoginHandler, RegisterHandler]

@Module({
  imports: [
    CqrsModule,
    PassportModule,
    JwtModule.register({
      secret: environments.skey
  })],
  providers: [...CommandHandlers, AuthUserRepoProvider, AuthUserCollectionProvider, JwtStrategy],
  controllers: [AuthUserController]
})
export class AuthUserModule {}
