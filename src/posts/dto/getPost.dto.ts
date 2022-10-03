import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

export class getPostsDtoReq {
  @ApiProperty({ required: false, example: '1' })
  page: string;

  @ApiProperty({ required: false, example: 'title' })
  title: string;

  @ApiProperty({ required: false, example: 'Html' })
  tags: string;
}

export class Post {
  @ApiResponseProperty({ type: String })
  id: string;

  @ApiResponseProperty({ type: String })
  title: string;

  @ApiResponseProperty({ type: String })
  description: string;

  @ApiResponseProperty({ type: Array })
  tags: string;
}

export class getPostsDtoRes {
  @ApiResponseProperty({ type: Post })
  posts: Post;

  @ApiResponseProperty({ type: Number })
  current_page: number;

  @ApiResponseProperty({ type: Number })
  total_page: number;

  @ApiResponseProperty({ type: Number })
  page_size: number;

  @ApiResponseProperty({ type: Number })
  total: number;
}
