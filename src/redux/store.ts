import { configureStore } from '@reduxjs/toolkit';
import { getData } from './api';

export const store = configureStore({
  reducer: {
    [getData.reducerPath]: getData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getData.middleware),
});
