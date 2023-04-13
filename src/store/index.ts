import { configureStore } from '@reduxjs/toolkit';
import searchQuerySlice from './searchQuerySlice';
import formCardsSlice from './formCardsSlice';
import apiSlice from 'services/apiService';

export const store = configureStore({
  reducer: {
    searchQuery: searchQuerySlice,
    formCards: formCardsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
