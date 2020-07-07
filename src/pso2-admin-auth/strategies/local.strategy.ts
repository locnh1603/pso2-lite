import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/pso2-admin-auth/pso2-admin-auth.service';
import crypto from 'crypto-js';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username, password): Promise<any> {
    const userInfo = {
      username, password
    }
    const user = await this.authService.validate(userInfo);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}