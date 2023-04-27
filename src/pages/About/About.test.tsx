import { render, screen } from '@testing-library/react';
import About from './About';

describe('About page', () => {
  it('should render heading on about page', () => {
    render(<About />);
    expect(screen.getByText('About us')).toBeInTheDocument();
  });
});
