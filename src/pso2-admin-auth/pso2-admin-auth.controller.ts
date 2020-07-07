import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/pso2-admin-auth/pso2-admin-auth.service';
import { LocalAuthGuard } from 'src/pso2-admin-auth/guard/auth.guard';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AdminUser } from 'src/shared/pso2-admin-user.interface';

@Controller('admin-auth')
export class Pso2AdminAuthController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({type: AdminUser})
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
