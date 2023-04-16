import { describe } from 'vitest';
import searchReducer from './searchQuerySlice';
import { setSearchQuery } from './searchQuerySlice';

describe('search query state', () => {
  it('should return initial state on empty action', () => {
    const result = searchReducer(undefined, { type: '' });
    expect(result).toEqual({ value: '' });
  });

  it('should properly set query string to state', () => {
    const action = { type: setSearchQuery.type, payload: 'test value' };
    const result = searchReducer({ value: 'old value' }, action);
    expect(result.value).toBe('test value');
  });
});
