import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { CharacterType } from 'types/types';

interface SearchResultsState {
  value: Array<CharacterType>;
}

const initialState: SearchResultsState = {
  value: [],
};

const searchResultsSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Array<CharacterType>>) => {
      state.value = action.payload;
    },
  },
});

export const { setCharacters } = searchResultsSlice.actions;
export const selectCharacters = (state: RootState) => state.searchResult.value;
export default searchResultsSlice.reducer;
