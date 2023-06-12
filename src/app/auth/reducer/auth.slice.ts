import { createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { signUpUser, signInUser, signOutUser } from '@/app/auth/api/index';

import { UserData, AuthData } from '../types';

type UsersState = {
  readonly loading: boolean;
  readonly error: AxiosError | Error | null;
  readonly userInfo: UserData | null;
  readonly authInfo: AuthData | null;
};

const initialState = {
  loading: false,
  error: null,
  userInfo: null,
  authInfo: null,
} as UsersState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, { payload: auth }) => {
        state.loading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, { payload: auth }) => {
        state.loading = false;
        state.userInfo = auth.user;
        state.authInfo = auth.auth;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message;
        }
      });
    builder
      .addCase(signOutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.loading = false;
        state.userInfo = null;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
