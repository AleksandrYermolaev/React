import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import Check, { CheckProps } from './Check';

describe('Check', () => {
  const stubOptions = ['1', '2', '3', '4'];
  const checkProps: CheckProps = {
    type: 'radio',
    label: 'radio',
    options: stubOptions,
    errMessage: 'error',
    register: vi.fn(),
  };

  it('should render correct amount of radios', () => {
    const { getAllByRole } = render(<Check {...checkProps} />);
    expect(getAllByRole('radio').length).toBe(stubOptions.length);
  });
});
