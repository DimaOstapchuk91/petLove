import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getUserCurrentData,
  getUserFullCurrentData,
  loginUser,
  logoutUser,
  registerUser,
} from './operations';

const initialState = {
  isLoggedIn: false,
  userCurrent: null,
  userCurrentFull: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    unauthorized() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(getUserCurrentData.fulfilled, (state, action) => {
        state.userCurrent = action.payload;
      })
      .addCase(getUserFullCurrentData.fulfilled, (state, action) => {
        state.userCurrentFull = action.payload;
      })
      .addCase(logoutUser.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          registerUser.pending,
          loginUser.pending,
          getUserCurrentData.pending,
          getUserFullCurrentData.pending,
          logoutUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.fulfilled,
          loginUser.fulfilled,
          getUserCurrentData.fulfilled,
          getUserFullCurrentData.fulfilled,
          logoutUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          loginUser.rejected,
          getUserCurrentData.rejected,
          getUserFullCurrentData.rejected,
          logoutUser.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { unauthorized } = authSlice.actions;

export const userReducer = authSlice.reducer;
