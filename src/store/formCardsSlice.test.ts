import { describe } from 'vitest';
import formCardsReducer from './formCardsSlice';
import { addCard } from './formCardsSlice';

describe('search query state', () => {
  it('should return initial state on empty action', () => {
    const result = formCardsReducer(undefined, { type: '' });
    expect(result).toEqual({ cards: [] });
  });

  it('should properly set card data to state', () => {
    const stubUser = {
      name: 'test name',
      surname: 'test surname',
      birthday: 0,
      family: '',
      gender: '',
      avatar: '',
      notifications: '',
    };
    const action = { type: addCard.type, payload: stubUser };
    const result = formCardsReducer({ cards: [] }, action);
    expect(result.cards[0].name).toBe('test name');
  });
});
