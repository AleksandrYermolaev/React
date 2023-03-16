import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import HomeGrid from './HomeGrid';

describe('HomeGrid', () => {
  const cardsStub = [
    {
      image: 'img-url',
      title: 'Card title',
      subtitle: 'Card sybtitle',
      categories: 'category1, category2',
      likes: 5,
      views: 10,
      date: 1,
    },
    {
      image: 'img-url',
      title: 'Card title',
      subtitle: 'Card sybtitle',
      categories: 'category1, category2',
      likes: 5,
      views: 10,
      date: 1,
    },
    {
      image: 'img-url',
      title: 'Card title',
      subtitle: 'Card sybtitle',
      categories: 'category1, category2',
      likes: 5,
      views: 10,
      date: 1,
    },
  ];

  it('should render correct amount of cards', () => {
    const { getAllByRole } = render(<HomeGrid data={cardsStub} />);
    expect(getAllByRole('article').length).toBe(cardsStub.length);
  });
});
