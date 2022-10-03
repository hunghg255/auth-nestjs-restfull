import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

export class LoginDtoReq {
  @ApiProperty({ required: true, example: 'admin' })
  username: string;
}

export class LoginDtoRes {
  @ApiResponseProperty({ type: String })
  accessToken: string;

  @ApiResponseProperty({ type: String })
  refreshToken: string;
}
