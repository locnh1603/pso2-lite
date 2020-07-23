import { AuthUserDto } from "src/shared/models/auth-user-dto.model";
import { Document } from 'mongoose'

export interface AuthUserDocument extends AuthUserDto, Document {
  id: string;
  _id: string;
}