import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose'
import { UserSchema, AdminUser } from 'src/shared/pso2-admin-user.interface';
import * as crypto from 'crypto-js'
import { userInfo } from 'os';

@Injectable()
export class Pso2AdminUserService {
  private readonly AdminUserModel = mongoose.model('pso2-gather-lite.users', UserSchema) 

  createUser(userInfo: AdminUser): Promise<mongoose.Document> {
    userInfo.password = crypto.SHA256(userInfo.password).toString(crypto.enc.Hex);
    const document = new this.AdminUserModel(userInfo);
    return document.save()
  }

  changePwd(newUserInfo: AdminUser): Promise<mongoose.Document> {
    const username = newUserInfo.username;
    const password = crypto.SHA256(newUserInfo.password).toString(crypto.enc.Hex);
    return this.AdminUserModel.findOneAndUpdate({username}, {password}).exec();
  }
}
