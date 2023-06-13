import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { PostItem, ValidationErrors } from '../types';

export type FetChPostRequestDTO = {
  postId: number;
};

export type FetchPostResponseDTO = {
  post: PostItem;
};

export const fetchPostById = createAsyncThunk<
  FetchPostResponseDTO,
  FetChPostRequestDTO,
  {
    rejectValue: ValidationErrors;
  }
>('posts/fetchById', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post(`/api/posts/${params.postId}`);
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
