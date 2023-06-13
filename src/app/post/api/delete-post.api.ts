import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { ValidationErrors } from '../types';

type DeletePostRequestDTO = {
  id: number;
};

type DeletePostResponseDTO = {
  id: number;
};

export const removePostById = createAsyncThunk<
  DeletePostResponseDTO,
  DeletePostRequestDTO,
  {
    rejectValue: ValidationErrors;
  }
>('posts/removeById', async (params, { rejectWithValue }) => {
  try {
    const response = await client.delete<DeletePostResponseDTO>(`/api/posts`, {
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
