import { createAsyncThunk } from '@reduxjs/toolkit';
import { petLoveApi } from '../service/configApi.js';
import { handleRequest } from '../service/handleRequest.js';

export const getAllNoticesData = createAsyncThunk(
  'noties/getAll',
  async (params, thunkAPI) => {
    const {
      keyword = '',
      category,
      locationId,
      byDate,
      byPrice,
      byPopularity,
      page = 1,
      limit = 6,
      sex,
    } = params;

    console.log(params);

    const requestFunction = async () => {
      const searchParams = new URLSearchParams();
      if (keyword) searchParams.append('keyword', keyword);
      if (category) searchParams.append('category', category);
      if (locationId) searchParams.append('locationId', locationId);
      if (byDate) searchParams.append('byDate', byDate);
      if (byPrice) searchParams.append('byPrice', byPrice);
      if (byPopularity) searchParams.append('byPopularity', byPopularity);
      if (sex) searchParams.append('sex', sex);
      searchParams.append('page', page);
      searchParams.append('limit', limit);
      console.log(searchParams.toString());

      return petLoveApi.get(`/notices?${searchParams.toString()}`);
    };
    return handleRequest(requestFunction, thunkAPI);
  }
);
