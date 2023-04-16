import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { UserType } from 'types/types';

interface formCardsState {
  cards: Array<UserType>;
}

const initialState: formCardsState = {
  cards: [],
};

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<UserType>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = formCardsSlice.actions;
export const selectCards = (state: RootState) => state.formCards.cards;
export default formCardsSlice.reducer;
