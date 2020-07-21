import { mainLogger, adminLogger } from "src/shared/helpers/logger";
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    mainLogger.info(`request ${req.method} ${req.url}`);
    if (req.method!== 'GET') {
      mainLogger.info(`\r\n${JSON.stringify(req.body, null, 2)}`);
    }
    next();
  }
}
