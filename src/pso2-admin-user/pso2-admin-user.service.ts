import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose'
import * as crypto from 'crypto-js'
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { User } from 'src/shared/schemas/admin-user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class Pso2AdminUserService {
  constructor(@InjectModel(ModuleNameEnums.admin_user) private userModel: Model<User>) {}

  async createUser(userInfo: User): Promise<mongoose.Document> {
    userInfo.password = crypto.SHA256(userInfo.password.toString()).toString(crypto.enc.Hex);
    const document = new this.userModel(userInfo);
    return document.save()
  }

  async changePwd(newUserInfo: User): Promise<mongoose.Document> {
    const username = newUserInfo.username;
    const password = crypto.SHA256(newUserInfo.password.toString()).toString(crypto.enc.Hex);
    return this.userModel.findOneAndUpdate({username}, {password});
  }
}
