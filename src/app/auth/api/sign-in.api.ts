import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { AuthData, UserData, ValidationError } from '../types';

export type SignInRequestDTO = {
  email: string;
  password: string;
};

export type SignInResponseDTO = {
  user: UserData;
  auth: AuthData;
};

export const signInUser = createAsyncThunk<
  SignInResponseDTO,
  SignInRequestDTO,
  {
    rejectValue: ValidationError;
  }
>('user/signin', async (params, { rejectWithValue }) => {
  try {
    return await client.post('./api/auth/signin', { params });
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    // storage.removeItem('access_token');
    // storage.removeItem('refresh_token');
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
