import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { Observable, of, TimeoutError, throwError, EMPTY } from 'rxjs';
import { tap, catchError, timeout } from 'rxjs/operators';
import { logger } from 'src/shared/helpers/logger';
import { off } from 'process';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap((data) => {
          logger.info(`request success, return ${data.length || 0} records after ${Date.now() - now}ms`);
        })
      )
  }
}