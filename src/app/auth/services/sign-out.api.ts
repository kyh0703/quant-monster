import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';
import storage from '@/lib/storage/storage.lib';

import { ValidationError } from '../types';

const signOut = () => {
  return client.post(`/api/auth/signout`);
};
