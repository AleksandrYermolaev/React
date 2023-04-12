import { configureStore } from '@reduxjs/toolkit';
import searchQuerySlice from './searchQuerySlice';

export const store = configureStore({
  reducer: {
    searchQuery: searchQuerySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
