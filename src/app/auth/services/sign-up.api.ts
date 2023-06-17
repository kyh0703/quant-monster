import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { UserData, ValidationError } from '../types';

export type SignUpDTO = {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
};
