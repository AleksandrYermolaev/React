import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound page', () => {
  it('should render heading on 404 page', () => {
    render(<NotFound />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
