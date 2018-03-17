import {
  Middleware,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NextFunction, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { Users } from '../schemas/user.schema';
import { JWT_SECRET } from '../../../config/environments.config';

@Middleware()
export class IsAuthenticated implements NestMiddleware {
  resolve() {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log(req.headers.authorization)
      if (
        req.headers.authorization &&
        (req.headers.authorization as string).split(' ')[0] === 'Bearer'
      ) {
        const token = (req.headers.authorization as string).split(' ')[1];
        let decoded: any;
        try {
          decoded = jwt.verify(token, JWT_SECRET);
        } catch (e) {
          if (e.name === 'TokenExpiredError')
            throw new HttpException(
              { success: false, message: 'Expired token' },
              HttpStatus.UNAUTHORIZED,
            );
          throw new HttpException(
            { sucess: false, message: 'Authentication Error' },
            HttpStatus.UNAUTHORIZED,
          );
        }
        console.log('decode jwt', decoded);
        const user = await Users.findOne({ _id: decoded._id });
        if (!user) {
          throw new HttpException(
            { sucess: false, message: 'User from JWT has been not found' },
            HttpStatus.UNAUTHORIZED,
          );
        }

        req.user = {
          _id: decoded._id,
          email: decoded.email,
        };
        return next();
      } else {
        throw new HttpException(
          { success: false, message: 'Unauthorized' },
          HttpStatus.UNAUTHORIZED,
        );
      }
    };
  }
}
