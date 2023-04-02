import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import Text from './Text';

describe('Text', () => {
  const textProps = {
    label: 'Name' as 'Name' | 'Surname',
    errMessage: 'error',
    register: vi.fn(),
  };

  it('should render input', () => {
    const { getByLabelText } = render(<Text {...textProps} />);
    expect(getByLabelText(/name/i)).toBeInTheDocument();
  });
});
