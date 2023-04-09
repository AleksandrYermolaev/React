import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import HomeGrid from './HomeGrid';
import { allCharacterStub } from 'mocks/mockData';

describe('HomeGrid', () => {
  it('should render message, when data is not found', () => {
    const { getByText } = render(<HomeGrid data={[]} isLoaded={true} />);
    expect(getByText(/does not exist/i)).toBeInTheDocument();
  });
  it('should render correct amount of cards', () => {
    const { getAllByRole } = render(<HomeGrid data={allCharacterStub.results} isLoaded={true} />);
    expect(getAllByRole('article').length).toBe(allCharacterStub.results.length);
  });
});
