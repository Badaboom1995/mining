import { Middleware, NestMiddleware, ExpressMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Middleware()
export class EnsureLoggedInMiddleware implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!req.isAuthenticated()) {
        if (req.session) {
          req.session.returnTo = req.path;
        }
        throw new HttpException(
          { success: false, message: 'Unauthorized' },
          HttpStatus.UNAUTHORIZED,
        );
      }
      next();
    };
  }
}
