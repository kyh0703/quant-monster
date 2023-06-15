// fetchPostsDTO
export interface PostsRequestDTO {
  tag: string | null;
  page: number | null;
  username?: string;
}

export interface PostsResponseDTO {
  posts: Post[] | null;
  lastPage: number;
}

export type ValidationErrors = {
  status: number;
  message: string | null | undefined;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
};
