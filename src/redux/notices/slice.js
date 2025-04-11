import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllNoticesData } from './operations.js';

const initialState = {
  notiesData: [],
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
