import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/moviesSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: {
    movies : moviesReducer,
  },
});
