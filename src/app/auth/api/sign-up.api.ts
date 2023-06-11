import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { UserData, ValidationError } from '../types';

export type SignUpRequestDTO = {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
};

const signUp = (params: SignUpRequestDTO): Promise<UserData> => {
  return client.post(`/api/auth/signup`, params);
};

export const signUpUser = createAsyncThunk<
  UserData,
  SignUpRequestDTO,
  {
    rejectValue: ValidationError;
  }
>('user/signup', async (params, { rejectWithValue }) => {
  try {
    return signUp(params);
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
