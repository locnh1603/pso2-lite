import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { KeyEnums } from 'src/shared/pso2-lite.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: KeyEnums.skey,
    });
  }

  async validate(payload: any) {
    return { username: payload.username, password: payload.password };
  }
}