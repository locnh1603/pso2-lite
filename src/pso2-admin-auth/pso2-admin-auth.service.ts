import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto-js';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shared/schemas/admin-user.schema';
import { UserDto } from 'src/shared/dto/admin-user-dto.model';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';

@Injectable()
export class AuthService {
  constructor(@InjectModel(ModuleNameEnums.admin_user) private userModel: Model<User>) {
    
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
}
