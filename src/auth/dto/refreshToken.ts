import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

export class refreshTokenDtoReq {
  @ApiProperty({ required: true })
  refreshToken: string;
}

export class refreshTokenDtoRes {
  @ApiResponseProperty({ type: String })
  accessToken: string;

  @ApiResponseProperty({ type: String })
  refreshToken: string;
}
