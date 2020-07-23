import { AuthUserDto } from "src/shared/models/auth-user-dto.model";

export class LoginCommand {
  constructor(
    public userInfo: AuthUserDto
  ) { }
}

export class RegisterCommand {
  constructor(
    public userInfo: AuthUserDto
  ) { }
}