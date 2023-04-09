import { render } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination', () => {
  let next: Mock;
  let prev: Mock;

  beforeEach(() => {
    next = vi.fn();
    prev = vi.fn();
  });

  afterEach(() => vi.restoreAllMocks());

  it('should render pagination component with active buttons', async () => {
    const user = userEvent.setup();
    const { getByText } = render(
      <Pagination next={next} prev={prev} page={2} isLastPage={false} />
    );
    expect(getByText(/2/i)).toBeInTheDocument();
    await user.click(getByText(/prev/i));
    await user.click(getByText(/next/i));
    expect(prev).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should disable prev button on firts page', () => {
    const { getByText } = render(
      <Pagination next={next} prev={prev} page={1} isLastPage={false} />
    );
    expect(getByText(/prev/i)).toBeDisabled();
  });

  it('should render disable next button on last page', () => {
    const { getByText } = render(<Pagination next={next} prev={prev} page={2} isLastPage={true} />);
    expect(getByText(/next/i)).toBeDisabled();
  });
});
