import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RequestValidatorGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const urlEndpoint = request.url.split('/')[request.url.split('/').length - 1];

    if ( urlEndpoint === 'type' ) {
      return this.validateTypeRequest(request);
    } 
    return this.validateNameRequest(request);
  }

  validateNameRequest(request: Request): boolean {
    const body = JSON.parse(JSON.stringify(request.body));
    return Object.keys(body).includes('name') && !!body.name;
  }

  validateTypeRequest(request: Request): boolean {
    const body = JSON.parse(JSON.stringify(request.body));
    return (Object.keys(body.class).includes('category') && !!body.class.category) || (Object.keys(body.class).includes('size') && !!body.class.size);
  }
}