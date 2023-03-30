import { render } from '@testing-library/react';
import { InputsType } from 'types/types';
import { describe, expect, vi } from 'vitest';
import Select from './Select';

describe('Select', () => {
  const stubOptions = ['1', '2', '3'];
  const selectProps = {
    label: 'Family',
    name: 'family' as keyof InputsType,
    options: stubOptions,
    register: vi.fn(),
    errMessage: 'error',
  };

  it('should render correct amount of options', () => {
    const { getAllByTestId } = render(<Select {...selectProps} />);
    expect(getAllByTestId(/option/i).length).toBe(stubOptions.length);
  });
});
