import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { mainLogger, adminLogger } from 'src/shared/helpers/logger';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request: Request = context.switchToHttp().getRequest();

    return next
      .handle()
      .pipe(
        tap((data) => {
          if (request.url.split('/').includes('admin-auth') || request.url.split('/').includes('admin-user')) {
            this.logAdmin(now);
          }
          else {
            this.logMain(now, data);
          }
        })
      )
  }

  logMain(now: number, data: any[]) {
    mainLogger.info(`request success, return ${data.length || 1} record(s) after ${Date.now() - now}ms`);
  }

  logAdmin(now: number) {
    adminLogger.info(`request success, return response after ${Date.now() - now}ms`);
  }
}