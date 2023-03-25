import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import Date from './Date';

describe('Date', () => {
  const dateProps = {
    label: 'date',
    errMessage: 'error',
    getValue: vi.fn(),
  };

  it('should render input', () => {
    const { getByLabelText } = render(<Date {...dateProps} />);
    expect(getByLabelText(/date/i)).toBeInTheDocument();
  });
});
