import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    try {
      const decoded: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.username = decoded.username;
      next();
    } catch (error) {
      console.log(error);
      return res.sendStatus(403);
    }
  }
}
