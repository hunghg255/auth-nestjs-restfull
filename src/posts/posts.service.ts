import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { postDummy } from '../mock-data/posts';
import { tags } from '../mock-data/tags';

@Injectable()
export class PostsService {
  getTags() {
    return tags;
  }

  getPosts(req: any) {
    let data = postDummy[req.username];

    const queryPage = +req.query?.page || 1;
    const page = queryPage <= 1 ? 1 : queryPage;

    if (req.query?.title || req.query?.tags) {
      const postFilter =
        postDummy[req.username]?.posts?.filter((item) => {
          if (req.query?.title && req.query?.tags) {
            return (
              item?.title?.startsWith(req.query?.title) &&
              item?.tags?.includes(req.query?.tags)
            );
          }

          return (
            item?.title?.startsWith(req.query?.title) ||
            item?.tags?.includes(req.query?.tags)
          );
        }) || [];

      data = {
        ...data,
        posts: postFilter.slice((page - 1) * 10, data.page_size * page),
        current_page: page,
        total_page: Math.ceil(postFilter?.length / 10),
        total: postFilter?.length || 0,
      };
    } else {
      data = {
        ...data,
        posts: data.posts.slice((page - 1) * 10, data.page_size * page),
        current_page: page,
        total: data.posts?.length || 0,
      };
    }

    return data;
  }

  createPost(username: string, body: any) {
    if (body?.title && body?.description) {
      const bodyData = { id: faker.datatype.uuid(), ...body };
      postDummy[username].posts.unshift(bodyData);

      postDummy[username] = {
        ...postDummy[username],
        current_page: 1,
        total_page: Math.ceil(postDummy[username].posts.length / 10),
        total: postDummy[username].posts?.length,
      };

      return body;
    }

    return {
      message: 'title, description is required',
    };
  }

  editPost(username: string, params, body: any) {
    postDummy[username].posts = postDummy[username].posts.map((item) => {
      let newItem = { ...item };
      if (newItem.id === params.postId) {
        newItem = {
          ...newItem,
          ...body,
        };
      }

      return newItem;
    });

    return body;
  }

  deletePost(username: string, params) {
    postDummy[username].posts = postDummy[username].posts.filter(
      (item) => item.id !== params.postId,
    );

    postDummy[username] = {
      ...postDummy[username],
      current_page: 1,
      total_page: Math.ceil(postDummy[username].posts.length / 10),
      total: postDummy[username].posts?.length,
    };

    return params?.postId;
  }
}
