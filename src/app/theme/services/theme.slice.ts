import { createSlice } from '@reduxjs/toolkit';

import storage from '../../../lib/storage/storage.lib';

export type ThemeState = {
  readonly theme: 'dark' | 'light';
};

const initialState: ThemeState = {
  theme: 'light',
};

const slice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    enableDarkMode(state) {
      storage.setItem('theme', 'dark');
      state.theme = 'dark';
    },
    enableLightMode(state) {
      storage.setItem('theme', 'light');
      state.theme = 'light';
    },
  },
});

export const themeActions = slice.actions;
export default slice.reducer;
