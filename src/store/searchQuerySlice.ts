import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface SearchQueryState {
  value: string;
}

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
