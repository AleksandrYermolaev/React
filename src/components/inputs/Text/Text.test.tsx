import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import Text from './Text';

describe('Text', () => {
  const textProps = {
    label: 'text',
    errMessage: 'error',
    getValue: vi.fn(),
  };

  it('should render input', () => {
    const { getByLabelText } = render(<Text {...textProps} />);
    expect(getByLabelText(/text/i)).toBeInTheDocument();
  });
});
