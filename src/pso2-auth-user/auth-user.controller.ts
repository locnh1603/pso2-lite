import { Controller, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { AuthUserDto } from 'src/shared/models/auth-user-dto.model';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';
import { LoginCommand, RegisterCommand } from 'src/pso2-auth-user/commands/auth-user.command';

@Controller('auth-user')
export class AuthUserController {
  constructor(private commandBus: CommandBus) {

  }

  @Post('/users')
  @ApiBody({type: AuthUserDto})
  @ApiResponse({status: 201, description: 'User created'})
  async createUser(@Body() userInfo: AuthUserDto)  {
    return await this.commandBus.execute(new RegisterCommand(userInfo));
  }

  @Post('/login')
  @ApiBody({type: AuthUserDto})
  async login(@Body() userInfo: AuthUserDto)  {
    return await this.commandBus.execute(new LoginCommand(userInfo));
  }

  // @Patch()
  // @ApiBody({type: User})
  // @ApiResponse({status: 201, description: 'User updated'})
  // updateUser(@Body() userInfo: User)  {
  //   this.userService.changePwd(userInfo)
  // } 
}
