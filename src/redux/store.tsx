import { configureStore } from '@reduxjs/toolkit';
import { getData } from './api';
import { favoritesReducer } from './favorites.slice';

export const store = configureStore({
  reducer: {
    [getData.reducerPath]: getData.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getData.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
