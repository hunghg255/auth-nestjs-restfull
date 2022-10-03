export declare class getPostsDtoReq {
    page: string;
    title: string;
    tags: string;
}
export declare class Post {
    id: string;
    title: string;
    description: string;
    tags: string;
}
export declare class getPostsDtoRes {
    posts: Post;
    current_page: number;
    total_page: number;
    page_size: number;
    total: number;
}
