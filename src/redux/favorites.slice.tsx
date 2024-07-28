import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../api/types';

const initialState: Character[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push({ ...action.payload });
      }
    },
    clearFavorites: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { toggleFavorites, clearFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
