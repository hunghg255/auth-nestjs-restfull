import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './auth.middleware';
import { AuthModule } from './auth/auth.module';
import { GalleriesModule } from './galleries/galleries.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, GalleriesModule, PostsModule],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      {
        path: '/auth/logout',
        method: RequestMethod.DELETE,
      },
      {
        path: '/tags',
        method: RequestMethod.GET,
      },
      {
        path: '/posts',
        method: RequestMethod.GET,
      },
      {
        path: '/posts',
        method: RequestMethod.POST,
      },
      '/posts/*',
    );
  }
}
