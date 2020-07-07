import { Injectable, Post } from '@nestjs/common';
import { UserSchema, AdminUser } from 'src/shared/pso2-admin-user.interface';
import * as mongoose from 'mongoose';
import * as crypto from 'crypto-js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly AdminUserModel = mongoose.model('pso2-gather-lite.users', UserSchema)

  constructor(private jwtService: JwtService) {
    
  }

  validate(userInfo: AdminUser): Promise<mongoose.Document> {
    const user = this.AdminUserModel.findOne({
      username: userInfo.username,
      password: crypto.SHA256(userInfo.password).toString(crypto.enc.Hex)
    }).then(
      (res: mongoose.Document) => {
        return res
      }
    ).catch(
      (err) => {
        return null;
      }
    );
    return user;
  }

  async login(user: AdminUser) {
    const payload = { username: user.username, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
