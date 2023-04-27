import { render, screen } from '@testing-library/react';
import HomeCard from './HomeCard';

describe('HomeCard', () => {
  it('should render skeleton when data is not load yet', () => {
    render(<HomeCard image="image" name="Test name" isLoaded={false} id={1} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTitle(/loading/i)).toBeInTheDocument();
  });

  it('should render the card when data is loaded', () => {
    render(<HomeCard image="image" name="Test name" isLoaded={true} id={1} />);
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByAltText(/avatar of test name/i)).toBeInTheDocument();
  });
});
