import { render, screen } from '@testing-library/react';
import HomeCard from './HomeCard';

describe('HomeCard', () => {
  const cardStub = {
    image: 'img-url',
    title: 'Card title',
    subtitle: 'Card sybtitle',
    categories: 'category1, category2',
    likes: 5,
    views: 10,
    date: 1,
  };

  it('should render card component with child components', () => {
    render(<HomeCard cardData={cardStub} />);
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByAltText(/image/i)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByAltText(/like/i)).toBeInTheDocument();
    expect(screen.getByAltText(/eye/i)).toBeInTheDocument();
  });
});
