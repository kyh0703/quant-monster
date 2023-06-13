import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { ValidationErrors } from '../types';

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

export const createPostById = createAsyncThunk<
  CreatePostResponseDTO,
  CreatePostRequestDTO,
  {
    rejectValue: ValidationErrors;
  }
>('posts/create', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post(`/ap/posts/write`, { params });
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
