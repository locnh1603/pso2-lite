import { AuthUserRepo } from "src/shared/repository/auth-user.repository";
import { AuthUserDto, LoginHistory } from "src/shared/models/auth-user-dto.model";
import { AuthUserDocument } from "src/shared/repository/auth-user.repository";
import { MongoDbEnums } from "src/shared/enum/mongodb.enum";
import { Model } from "mongoose";
import { Inject } from "@nestjs/common";

export class AuthUserMongodbRepo implements AuthUserRepo {
  constructor(
    @Inject(MongoDbEnums.AuthUserCollection)
    private readonly authUserDocument: Model<AuthUserDocument>,
  ) {}
  async getOneByIdAsync(id: String): Promise<AuthUserDto> {
    return this.authUserDocument.findOne({id}).then();
  }
  async validateAsync(entity: AuthUserDto): Promise<AuthUserDto> {
    return this.authUserDocument.findOne(entity as any).then(
      res => {
        const histories = [...res.loginHistories];
        histories.push({
          date: new Date().getTime(),
          result: 'success'
        });
        const newEntity = new AuthUserDto();
        newEntity.id = res.id;
        newEntity.username = res.username;
        newEntity.password = res.password;
        newEntity.loginHistories = [...histories];
        return this.authUserDocument.findOneAndUpdate({id: res.id},newEntity, {new: true}).then();
      }
    );
  }
  async createAsync(entity: AuthUserDto): Promise<AuthUserDto> {
    return this.authUserDocument.create(entity as any).then();
  }
  async updateAsync(entity: AuthUserDto): Promise<AuthUserDto> {
    return this.authUserDocument.findOneAndUpdate({ id: entity.id }, entity as any, { new: true }).then();
  }
  async deleteAsync(id: string): Promise<AuthUserDto> {
    return this.authUserDocument.findOneAndDelete({id}).then();
  }
}