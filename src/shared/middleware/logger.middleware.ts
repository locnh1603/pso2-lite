import { logger } from "src/shared/middleware/logger";

export function RoutingLoggerMiddleware (req: Request, res: Response, next: Function) {
  logger.info(`request ${req.method} ${req.url}`);
  next();
}