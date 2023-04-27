import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const child = 'Hello world!';

  it('should render button with child element', () => {
    render(<Button>{child}</Button>);
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
  });
});
