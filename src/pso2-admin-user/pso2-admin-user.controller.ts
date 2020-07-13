import { Controller, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { Pso2AdminUserService } from 'src/pso2-admin-user/pso2-admin-user.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/shared/schemas/admin-user.schema';

@Controller('admin-user')
export class AdminUserController {
  constructor(private userService: Pso2AdminUserService) {

  }

  @Post()
  @ApiBody({type: User})
  @ApiResponse({status: 201, description: 'User created'})
  createUser(@Body() userInfo: User)  {
    this.userService.createUser(userInfo)
  }

  @Patch()
  @ApiBody({type: User})
  @ApiResponse({status: 201, description: 'User updated'})
  updateUser(@Body() userInfo: User)  {
    this.userService.changePwd(userInfo)
  } 
}
