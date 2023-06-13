import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  createPostById,
  fetchPostById,
  fetchPage,
  updatePostById,
  removePostById,
} from '@/app/post/api/index';

import { PostItem } from '../types';

export interface InputPayload {
  key: 'body' | 'title' | 'tags';
  value: string | string[];
}

type PostsState = {
  readonly loading: boolean;
  readonly error: string | null | undefined;
  readonly post: PostItem | null;
  readonly write: {
    title: string;
    body: string;
    tags: string[];
    id: number;
  };
  readonly list: {
    posts: PostItem[] | null;
    lastPage: number;
  };
};

const initialState: PostsState = {
  loading: false,
  error: null,
  post: null,
  write: {
    title: '',
    body: '',
    tags: [],
    id: 0,
  },
  list: {
    posts: null,
    lastPage: 1,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    initWriteFiled: (state) => {
      state.write.title = '';
      state.write.body = '';
      state.write.tags = [];
    },
    setUpdateWriteField: (state, { payload: { title, body, tags, id } }) => {
      state.write.title = title;
      state.write.body = body;
      state.write.tags = tags;
      state.write.id = id;
    },
    changeWriteField: (
      state,
      { payload: { key, value } }: PayloadAction<InputPayload>,
    ) => ({
      ...state,
      write: {
        ...state.write,
        [key]: value,
      },
    }),
    initPostField: (state) => {
      state.post = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostById.fulfilled, (state, { payload: post }) => {
        state.loading = false;
        state.post = post;
      })
      .addCase(createPostById.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
    builder
      .addCase(fetchPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPage.fulfilled, (state, { payload: posts }) => {
        state.loading = false;
        state.list.posts = posts.posts;
        state.list.lastPage = posts.lastPage;
        state.error = null;
      })
      .addCase(fetchPage.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = null;
      });
    builder
      .addCase(fetchPostById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostById.fulfilled, (state, { payload: post }) => {
        state.loading = false;
        state.post = post.post;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(updatePostById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePostById.fulfilled, (state, { payload: post }) => {
        state.loading = false;
        state.post = post;
        state.error = '';
      })
      .addCase(updatePostById.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
    builder
      .addCase(removePostById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removePostById.fulfilled, (state, { payload: post }) => {
        state.loading = false;
        state.post = null;
        state.error = null;
      })
      .addCase(removePostById.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

export const postsAction = postsSlice.actions;
export default postsSlice.reducer;
