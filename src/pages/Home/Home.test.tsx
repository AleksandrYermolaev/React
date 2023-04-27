import { describe, expect, it, vi } from 'vitest';
import Home from './Home';
import { render } from '@testing-library/react';

vi.mock('hooks/stateHooks', async () => {
  return {
    useAppDispatch: vi.fn(() => vi.fn()),
    useAppSelector: vi.fn(),
  };
});
vi.mock('services/apiService', async () => {
  const actual = (await vi.importActual('services/apiService')) as object;
  return {
    ...actual,
    useGetCharactersQuery: vi
      .fn()
      .mockReturnValueOnce({
        data: {
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [],
        },
        isFetching: false,
        isSuccess: true,
      })
      .mockReturnValueOnce({
        data: {
          info: {
            count: 1,
            pages: 2,
            next: 'next',
            prev: null,
          },
          results: [
            {
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
            },
            {
              id: 2,
              name: 'user2',
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
            },
          ],
        },
        isFetching: false,
        isSuccess: true,
      }),
  };
});

describe('Home page', () => {
  afterAll(() => vi.clearAllMocks());

  it('should render message if no data received', () => {
    const { getByText, getByRole } = render(<Home />);
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByText(/not exist/i)).toBeInTheDocument();
  });

  it('should render home page', () => {
    const { getByText, getByRole, getAllByRole } = render(<Home />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(getAllByRole('article').length).toBe(2);
    expect(getByText(/user1/i)).toBeInTheDocument();
    expect(getByText(/user2/i)).toBeInTheDocument();
    expect(getByText(/prev/i)).toBeDisabled();
    expect(getByText(/next/i)).not.toBeDisabled();
  });
});
