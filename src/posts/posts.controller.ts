import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createPostsDtoReq } from './dto/createPosts.dto';
import { getPostsDtoReq, getPostsDtoRes } from './dto/getPost.dto';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({
    operationId: 'tags',
    summary: 'Get tags',
    description: 'Get tags',
  })
  @ApiBearerAuth()
  @Get('tags')
  getTags() {
    return this.postsService.getTags();
  }

  @ApiOperation({
    operationId: 'posts',
    summary: 'Get posts',
    description: 'Get post',
  })
  @ApiQuery({ type: getPostsDtoReq })
  @ApiResponse({ type: getPostsDtoRes })
  @ApiBearerAuth()
  @Get()
  getPosts(@Request() request) {
    return this.postsService.getPosts(request);
  }

  @ApiOperation({
    operationId: 'craetePosts',
    summary: 'Create new post',
    description: 'Create new post',
  })
  @ApiBearerAuth()
  @ApiBody({ type: createPostsDtoReq })
  @Post()
  createPost(@Request() request, @Body() body) {
    return this.postsService.createPost(request?.username, body);
  }

  @ApiOperation({
    operationId: 'editPosts',
    summary: 'Edit post',
    description: 'Edit post',
  })
  @ApiParam({ name: 'postId', example: 'abc' })
  @ApiBearerAuth()
  @Patch(':postId')
  editPost(@Param() params, @Request() request, @Body() body) {
    return this.postsService.editPost(request?.username, params, body);
  }

  @ApiOperation({
    operationId: 'deletePost',
    summary: 'Delete post',
    description: 'Delete post',
  })
  @ApiParam({ name: 'postId', example: 'abc' })
  @ApiBearerAuth()
  @Delete(':postId')
  deletePost(@Param() params, @Request() request) {
    return this.postsService.deletePost(request?.username, params);
  }
}
