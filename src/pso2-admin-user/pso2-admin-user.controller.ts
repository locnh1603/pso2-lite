import { Controller, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { Pso2AdminUserService } from 'src/pso2-admin-user/pso2-admin-user.service';
import { AdminUser } from 'src/shared/pso2-admin-user.interface';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/pso2-admin-auth/guard/auth.guard';

@Controller('admin-user')
export class AdminUserController {
  constructor(private userService: Pso2AdminUserService) {

  }

  @Post()
  @ApiBody({type: AdminUser})
  @ApiResponse({status: 201, description: 'User created'})
  createUser(@Body() userInfo: AdminUser)  {
    this.userService.createUser(userInfo)
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  @ApiBody({type: AdminUser})
  @ApiResponse({status: 201, description: 'User updated'})
  updateUser(@Body() userInfo: AdminUser)  {
    this.userService.changePwd(userInfo)
  } 
}
