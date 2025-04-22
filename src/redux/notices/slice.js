import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addNoticeFavorite,
  getAllNoticesData,
  getNoticeById,
  removeNoticeFavorite,
} from './operations.js';

const initialState = {
  notiesData: [],
  favorites: [],
  noticeById: null,
  totalPages: null,
  isLoading: false,
  isError: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllNoticesData.fulfilled, (state, action) => {
        console.log(action.payload.results);
        state.notiesData = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getNoticeById.fulfilled, (state, action) => {
        state.noticeById = action.payload;
      })
      .addCase(addNoticeFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(removeNoticeFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addMatcher(isAnyOf(getAllNoticesData.pending), state => {
        state.isError = null;
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getAllNoticesData.fulfilled), state => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getAllNoticesData.rejected), (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
