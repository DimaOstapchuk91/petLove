import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistUserConfig = {
  key: 'accessToken',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
