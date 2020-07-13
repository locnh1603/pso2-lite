import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/pso2-admin-auth/pso2-admin-auth.service';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from 'src/shared/dto/admin-user-dto.model';

@Controller('admin-auth')
export class Pso2AdminAuthController {

  constructor(private authService: AuthService) {}
}
