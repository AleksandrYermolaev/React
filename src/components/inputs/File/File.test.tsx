import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import File from './File';

describe('File', () => {
  const fileProps = {
    label: 'file',
    name: 'file',
    accept: 'image/*',
    getValue: vi.fn(),
    errMessage: 'error',
  };

  it('should render input', () => {
    const { getByLabelText } = render(<File {...fileProps} />);
    expect(getByLabelText(/file/i)).toBeInTheDocument();
  });
});
