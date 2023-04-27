import * as RTKPackage from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { UserType } from 'types/types';

const isProduction = process.env.NODE_ENV === 'production';

type RTKType = typeof RTKPackage;

interface DefaultRTK extends RTKType {
  default: unknown;
}

export interface formCardsState {
  cards: Array<UserType>;
}

const { createSlice } = isProduction
  ? ((RTKPackage as DefaultRTK).default as RTKType)
  : (RTKPackage as RTKType);

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
