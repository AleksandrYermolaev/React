import * as RTKPackage from '@reduxjs/toolkit';
import searchQuerySlice from './searchQuerySlice';
import formCardsSlice from './formCardsSlice';
import apiSlice from '../services/apiService';

const isProduction = process.env.NODE_ENV === 'production';

type RTKType = typeof RTKPackage;

interface DefaultRTK extends RTKType {
  default: unknown;
}

const { configureStore } = isProduction
  ? ((RTKPackage as DefaultRTK).default as RTKType)
  : (RTKPackage as RTKType);

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
