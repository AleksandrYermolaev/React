import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CharacterInfo from './CharacterInfo';

const testCharacter = {
  id: 1,
  name: 'user1',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
};

describe('Character info modal content', () => {
  vi.mock('services/apiService', async () => {
    const actual = (await vi.importActual('services/apiService')) as object;
    return {
      ...actual,
      useGetCharacterQuery: vi.fn(() => ({
        data: testCharacter,
        isFetching: false,
        isSuccess: true,
      })),
    };
  });

  afterAll(() => vi.clearAllMocks());

  it('should display character info after loading', async () => {
    const { findByRole } = render(<CharacterInfo id={2} />);
    expect(await findByRole('heading')).toHaveTextContent(/user1/i);
  });
});
