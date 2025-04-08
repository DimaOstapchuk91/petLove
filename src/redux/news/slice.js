import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './operations.js';

const initialState = {
  dataNews: [],
  page: 1,
  perPage: 6,
  totalPages: null,
  isLoading: false,
  isError: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNews.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.dataNews = action.payload.result;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const newsReducer = newsSlice.reducer;
