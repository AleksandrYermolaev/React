import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Search from './Search';

describe('Search', () => {
  const inputProps = {
    value: 'initial',
    setValue: vi.fn(),
    placeholder: 'enter text',
  };

  it('should render input', () => {
    render(<Search {...inputProps} />);
    expect(screen.getByDisplayValue('initial')).toBeInTheDocument();
  });
});
