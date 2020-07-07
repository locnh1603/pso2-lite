import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export class AdminUser {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
