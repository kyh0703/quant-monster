import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { ValidationErrors } from '../types';

export type UpdatePostRequestDTO = {
  id: number;
  title: string;
  body: string;
  tags: string[];
};

export type UpdatePostResponseDTO = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
};

export const updatePostById = createAsyncThunk<
  UpdatePostResponseDTO,
  UpdatePostRequestDTO,
  {
    rejectValue: ValidationErrors;
  }
>('posts/updateById', async (params, { rejectWithValue }) => {
  try {
    const response = await client.patch<UpdatePostResponseDTO>(`/api/posts`, {
      params,
    });
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});