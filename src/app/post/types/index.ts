// fetchPostDTO
export type FetchPostRequestDTO = {
  postId: number;
};

export type FetchostResponseDTO = {
  post: PostItem;
};

// fetchPostsDTO
export interface FetchPostsRequestDto {
  tag: string | null;
  page: number | null;
  username?: string;
}

export interface PostsResponseDTO {
  posts: PostItem[] | null;
  lastPage: number;
}

// create Posts DTO
export type CreatePostRequestDTO = {
  title: string;
  body: string;
  tags: string[];
};

export type CreatePostResponseDTO = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
};

// delete Posts DTO
export type DeletePostRequestDTO = {
  id: number;
};

export type DeletePostResponseDTO = {
  id: number;
};

export type ValidationErrors = {
  status: number;
  message: string | null | undefined;
};

export type PostItem = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
};
