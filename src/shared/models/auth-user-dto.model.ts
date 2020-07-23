import { ApiProperty } from "@nestjs/swagger";

export class LoginHistory {
  @ApiProperty({type: String})
  date: number;
  @ApiProperty({type: String})
  result: string;
}

export class AuthUserDto {
  @ApiProperty({type: String})
  id: string;
  @ApiProperty({type: String})
  username: string;
  @ApiProperty({type: String})
  password: string;
  @ApiProperty({type: [LoginHistory]})
  loginHistories: LoginHistory[]

  constructor() {
    this.id = '';
    this.username = '';
    this.password = '';
    this.loginHistories = [];
  }
}

