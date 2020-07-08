import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto-js';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/module_name.enum';
import { Model } from 'mongoose';
import { User } from 'src/shared/schemas/admin-user.schema';
import { UserDto } from 'src/shared/dto/admin-user-dto.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, @InjectModel(ModuleNameEnums.admin_user) private userModel: Model<User>) {
    
  }

  async validate(userInfo: UserDto): Promise<User> {
    const user = this.userModel.findOne({
      username: userInfo.username,
      password: crypto.SHA256(userInfo.password).toString(crypto.enc.Hex)
    }).then(
      (res: User) => {
        return res
      }
    ).catch(
      (err) => {
        return null;
      }
    );
    return user;
  }

  async login(user: UserDto) {
    const payload = { username: user.username, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
