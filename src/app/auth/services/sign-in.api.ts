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
