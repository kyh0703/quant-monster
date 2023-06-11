import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { ValidationError } from '../types';

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

const createPost = (
  params: CreatePostRequestDTO,
): Promise<CreatePostResponseDTO> => {
  return client.post(`/api/posts/write`, { params });
};

export const createPostById = createAsyncThunk<
  CreatePostResponseDTO,
  CreatePostRequestDTO,
  {
    rejectValue: ValidationError;
  }
>('posts/create', async (params, { rejectWithValue }) => {
  try {
    return createPost(params);
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
