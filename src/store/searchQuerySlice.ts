import * as RTKPackage from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const isProduction = process.env.NODE_ENV === 'production';

type RTKType = typeof RTKPackage;

interface DefaultRTK extends RTKType {
  default: unknown;
}

export interface SearchQueryState {
  value: string;
}

const { createSlice } = isProduction
  ? ((RTKPackage as DefaultRTK).default as RTKType)
  : (RTKPackage as RTKType);

const initialState: SearchQueryState = {
  value: '',
};

const searchQuerySlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;
export const selectSearch = (state: RootState) => state.searchQuery.value;
export default searchQuerySlice.reducer;
