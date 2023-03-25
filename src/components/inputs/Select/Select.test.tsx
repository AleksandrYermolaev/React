import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import Select from './Select';

describe('Select', () => {
  const stubOptions = ['1', '2', '3'];
  const selectProps = {
    label: 'file',
    name: 'file',
    options: stubOptions,
    getValue: vi.fn(),
    errMessage: 'error',
  };

  it('should render correct amount of options', () => {
    const { getAllByTestId } = render(<Select {...selectProps} />);
    expect(getAllByTestId(/option/i).length).toBe(stubOptions.length);
  });
});
