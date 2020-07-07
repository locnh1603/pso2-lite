import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next: Function) {
  console.log(`Request ${req.method} ${req.originalUrl} Response ${res.statusCode}`, req.body );
  next();
};
