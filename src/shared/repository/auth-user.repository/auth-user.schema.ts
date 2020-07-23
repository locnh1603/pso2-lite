import * as mongoose from 'mongoose';
import { v4 } from 'uuid';

export const AuthUserSchema = new mongoose.Schema({
  id: {
    type: String,
    default: v4
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  loginHistories: {
    type: [{
      date: Number,
      result: String
    }],
    default: []
  }
})