export declare class PostsService {
    getTags(): string[];
    getPosts(req: any): any;
    createPost(username: string, body: any): any;
    editPost(username: string, params: any, body: any): any;
    deletePost(username: string, params: any): any;
}
