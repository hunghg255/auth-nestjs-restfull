import { Body, Controller, Delete, Post, Request } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDtoReq, LoginDtoRes } from './dto/login.dto';
import { refreshTokenDtoReq, refreshTokenDtoRes } from './dto/refreshToken';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    operationId: 'login',
    summary: 'Login',
    description:
      'Account: admin, admin1, admin2, adminRefresh, adminRefresh1, adminRefresh2, adminRefresh3, adminRefresh4, adminRefresh5, adminRefresh6, adminRefresh7, adminRefresh8, adminRefresh9, adminRefresh10',
  })
  @ApiBody({ type: LoginDtoReq })
  @ApiResponse({
    type: LoginDtoRes,
  })
  @Post('login')
  login(@Body() body) {
    return this.authService.login(body?.username);
  }

  @ApiOperation({
    operationId: 'Refresh token',
    summary: 'Refresh token',
  })
  @ApiBody({ type: refreshTokenDtoReq })
  @ApiResponse({
    type: refreshTokenDtoRes,
  })
  @Post('refresh-token')
  refreshToken(@Body() body) {
    return this.authService.refreshToken(body?.refreshToken);
  }

  @ApiOperation({
    operationId: 'logout',
    summary: 'Logout',
  })
  @ApiBearerAuth()
  @Delete('logout')
  logout(@Request() request) {
    return this.authService.logout(request.username);
  }
}
