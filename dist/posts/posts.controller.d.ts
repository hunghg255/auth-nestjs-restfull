import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getTags(): string[];
    getPosts(request: any): any;
    createPost(request: any, body: any): any;
    editPost(params: any, request: any, body: any): any;
    deletePost(params: any, request: any): any;
}
