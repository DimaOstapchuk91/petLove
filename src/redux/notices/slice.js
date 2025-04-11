import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllNoticesData } from './operations.js';

const initialState = {
  notiesData: [],
  filters: {
    keyword: '',
    category: '',
    locationId: '',
    byDate: '',
    byPrice: '',
    byPopularity: '',
    page: 1,
    limit: 6,
    sex: '',
  },
  totalPages: null,
  isLoading: false,
  isError: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setFilter(state, action) {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
    setNotiesPage: (state, action) => {
      const newPage = action.payload;
      if (newPage >= 1 && newPage <= state.totalPages) {
        state.filters.page = newPage;
      }
    },
  },
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

export const { setFilter, resetFilters, setNotiesPage } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
