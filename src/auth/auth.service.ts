import { Injectable } from '@nestjs/common';
import { account as user } from '../mock-data/users';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  account = user;

  login(username: string) {
    const user = this.account.find((user) => user.username === username);

    if (!user)
      return {
        code: 401,
      };

    const tokens = this.generateTokens(user);
    this.updateRefreshToken(username, tokens.refreshToken);

    return tokens;
  }

  refreshToken(refreshToken: string) {
    if (!refreshToken)
      return {
        code: 401,
      };

    try {
      const { id } = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
      ) as any;

      const user = this.account.find((user) => user.id === id);

      if (!user) {
        return {
          code: 403,
        };
      }

      const tokens = this.generateTokens(user);
      this.updateRefreshToken(user.username, tokens.refreshToken);

      return tokens;
    } catch (error) {
      return {
        code: 403,
      };
    }
  }

  logout(username) {
    const user = this.account.find((user) => user.username === username);
    this.updateRefreshToken(user.username, null);
    console.log(this.account);

    return {
      code: 204,
    };
  }

  generateTokens(data: any) {
    const { id, username } = data;
    // Create JWT
    const accessToken = jwt.sign(
      { id, username },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: username?.includes('Refresh') ? '1m' : '1d',
      },
    );
    const refreshToken = jwt.sign(
      { id, username },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: '30d',
      },
    );

    return { accessToken, refreshToken };
  }

  updateRefreshToken(username, refreshToken) {
    this.account = this.account.map((user) => {
      if (user.username === username)
        return {
          ...user,
          refreshToken,
        };

      return user;
    });
  }
}
