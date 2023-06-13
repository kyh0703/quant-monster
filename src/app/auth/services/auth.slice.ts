import { createSlice } from '@reduxjs/toolkit';

import { signUpUser, signInUser, signOutUser } from '@/app/auth/services/index';
import { RootState } from '@/app/store';

import { User, Token } from '../types';

type UsersState = {
  readonly user: User | null;
  readonly auth: Token | null;
};

const initialState = {
  user: null,
  auth: null,
} as UsersState;

const slice = createSlice({
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

export const authActions = slice.actions;
export default slice.reducer;
