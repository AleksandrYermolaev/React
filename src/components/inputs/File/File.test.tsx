import { render } from '@testing-library/react';
import { InputsType } from 'types/types';
import { describe, expect, vi } from 'vitest';
import File from './File';

describe('File', () => {
  const fileProps = {
    label: 'file',
    name: 'avatar' as keyof InputsType,
    accept: 'image/*',
    register: vi.fn(),
    errMessage: 'error',
  };

  it('should render input', () => {
    const { getByLabelText } = render(<File {...fileProps} />);
    expect(getByLabelText(/file/i)).toBeInTheDocument();
  });
});
