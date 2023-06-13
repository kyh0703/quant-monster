import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { PostItem, ValidationErrors } from '../types';

export interface FetchPageRequestDto {
  tag: string | null;
  page: number | null;
  username?: string;
}

export interface FetchPageResponseDTO {
  posts: PostItem[] | null;
  lastPage: number;
}

export const fetchPage = createAsyncThunk<
  FetchPageResponseDTO,
  FetchPageRequestDto,
  {
    rejectValue: ValidationErrors;
  }
>('posts/list', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post(`/api/posts`, params);
    return {
      posts: response.data.posts,
      lastPage: Number(response.headers['last-page']),
    } as FetchPageResponseDTO;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
