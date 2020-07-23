import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand, RegisterCommand } from 'src/pso2-auth-user/commands/auth-user.command';
import { AuthUserRepo } from 'src/shared/repository/auth-user.repository';
import { HttpException, HttpStatus } from '@nestjs/common';
import { AuthUserDto } from 'src/shared/models/auth-user-dto.model';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto-js'

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(
    private readonly repository: AuthUserRepo,
    private jwtService: JwtService
  ) { }

  async execute(command: LoginCommand) {
    const { userInfo } = command;
    userInfo.password = crypto.SHA256(userInfo.password).toString(crypto.enc.Hex);
    return await this.repository.validateAsync(userInfo as any)
      .then(res => {
        // handle login
        if (!res) {
          throw new HttpException('Wrong username or password', HttpStatus.NOT_FOUND);
        }
        const payload = `${res.username}${res.password}`;
        const accessToken = this.jwtService.sign(payload);
        return {
          expires_in: 3600,
          access_token: accessToken,
          status: 200
        };
      })
      .catch(
        err => {
          if (err) {
            throw new HttpException(err, HttpStatus.FORBIDDEN);
          }
        }
      )
  }
}

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
  constructor(
    private readonly repository: AuthUserRepo
  ) { }

  async execute(command: RegisterCommand) {
    const { userInfo } = command;
    userInfo.password = crypto.SHA256(userInfo.password).toString(crypto.enc.Hex);
    return await this.repository.createAsync(userInfo as any);
  }
}

