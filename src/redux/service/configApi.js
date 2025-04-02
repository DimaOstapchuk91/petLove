import axios from 'axios';

export const petLoveApi = axios.create({
  baseURL: 'https://petlove.b.goit.study/api/',

  headers: {
    'Content-Type': 'application/json',
  },

  withCredentials: true,
});

export const setAuthHeader = token => {
  petLoveApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
