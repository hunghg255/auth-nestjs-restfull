import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
