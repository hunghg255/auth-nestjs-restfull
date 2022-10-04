import { Injectable } from '@nestjs/common';
import { account } from '../mock-data/users';
import * as jwt from 'jsonwebtoken';

let USERS = account;

@Injectable()
export class AuthService {
  login(username: string) {
    const user = USERS.find((user) => user.username === username);

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

    const user = USERS.find((user) => user.refreshToken === refreshToken);
    if (!user)
      return {
        code: 403,
      };

    try {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

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
    const user = USERS.find((user) => user.username === username);
    this.updateRefreshToken(user.username, null);
    console.log(USERS);

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
    USERS = USERS.map((user) => {
      if (user.username === username)
        return {
          ...user,
          refreshToken,
        };

      return user;
    });
  }
}
