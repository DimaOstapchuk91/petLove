import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../user/selectors.js';

export const petLoveApi = axios.create({
  baseURL: 'https://petlove.b.goit.study/api/',

  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthHeader = token => {
  console.log(token);

  petLoveApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const useAuthToken = () => {
  const token = useSelector(selectToken); // Отримуємо токен з Redux
  // Оновлюємо заголовок для кожного запиту
  if (token) {
    setAuthHeader(token);
  }
};

export default useAuthToken;
