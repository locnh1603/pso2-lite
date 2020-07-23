import { AuthUserDto } from "src/shared/models/auth-user-dto.model";

export abstract class AuthUserRepo {
  getOneByIdAsync(id: string): Promise<AuthUserDto> {
    return null
  }
  validateAsync(entity: AuthUserDto): Promise<AuthUserDto> {
    return null;
  }
  createAsync(entity: AuthUserDto): Promise<AuthUserDto> {
    return null;
  }
  updateAsync(entity: AuthUserDto): Promise<AuthUserDto> {
    return null;
  }
  deleteAsync(id: string): Promise<AuthUserDto> {
    return null;
  }
}