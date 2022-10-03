import { ApiProperty } from '@nestjs/swagger';

export class createPostsDtoReq {
  @ApiProperty({ required: true, type: String })
  title: string;

  @ApiProperty({ required: true, type: String })
  description: string;

  @ApiProperty({ required: false, type: Array, example: ['Html'] })
  tags: string;
}
