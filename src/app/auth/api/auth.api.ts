import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    signIn: builder.query({
      query: () => '/api/auth/signin',
    }),
    sign,
  }),
});

export const { useSignInQuery } = authSlice;

export const signInUser = createAsyncThunk<
  SignInResponseDTO,
  SignInRequestDTO,
  {
    rejectValue: ValidationError;
  }
>('user/signin', async (params, { rejectWithValue }) => {
  try {
    return await client.post('/api/auth/signin', { params });
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

export const signOutUser = createAsyncThunk<
  null,
  undefined,
  {
    rejectValue: ValidationError;
  }
>('user/signout', async (params, { rejectWithValue }) => {
  try {
    signOut();
    // storage.removeItem('access_token');
    return null;
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

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
