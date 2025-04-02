import { createAsyncThunk } from '@reduxjs/toolkit';
import { petLoveApi, setAuthHeader } from '../service/configApi.js';

export const registerUser = createAsyncThunk(
  'user/register',
  async (credenrials, thunkAPI) => {
    try {
      const { data } = await petLoveApi.post('users/signup', credenrials);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await petLoveApi.post('user/signin', credentials);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserCurrentData = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await petLoveApi.get('users/current');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserFullCurrentData = createAsyncThunk(
  'user/full-current',
  async (_, thunkAPI) => {
    try {
      const { data } = await petLoveApi.get('users/current/full');

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserCurrent = createAsyncThunk(
  'user/current-edit',
  async (credenrials, thunkAPI) => {
    try {
      const { data } = await petLoveApi.patch(
        'users/current/edit',
        credenrials
      );

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPets = createAsyncThunk(
  'user/pets-add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await petLoveApi.post(
        'users/current/pets/add',
        credentials
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removePets = createAsyncThunk(
  'user/perts-remuve',
  async (id, thunkAPI) => {
    try {
      const { data } = petLoveApi.delete(`users/current/pets/remove/${id}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = petLoveApi.post('users/signout');
      return response.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
