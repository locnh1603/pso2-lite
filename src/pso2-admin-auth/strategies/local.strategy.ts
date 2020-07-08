import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/pso2-admin-auth/pso2-admin-auth.service';
import crypto from 'crypto-js';
import { User } from 'src/shared/schemas/admin-user.schema';
import { UserDto } from 'src/shared/dto/admin-user-dto.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username, password): Promise<any> {
    
    const userInfo: UserDto = {
      username, password
    }

    const user = await this.authService.validate(userInfo);
    if (!user) {
      throw new UnauthorizedException();
    }
    userInfo.password = user.password.toString();
    return userInfo;
  }
}