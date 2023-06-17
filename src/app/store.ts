import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import theme from '@/app/theme/services/theme.slice';

import { api } from '@/app/api';

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'],
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      theme,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
