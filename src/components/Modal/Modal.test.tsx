import { render } from '@testing-library/react';
import Modal from './Modal';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
  vi.mock('react-dom', () => {
    return {
      createPortal: vi.fn((element) => element),
    };
  });

  afterAll(() => vi.doUnmock('react-dom'));

  it('should render modal window', () => {
    const handleClose = vi.fn();
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <p>Test</p>
      </Modal>
    );
    expect(getByTestId(/modal/i)).toBeInTheDocument();
  });

  it('should proprely call close finction', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    const { getByTestId, getByText, getByRole } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <p>Test</p>
      </Modal>
    );
    await user.click(getByTestId(/modal/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
    await user.click(getByText(/test/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
    await user.click(getByRole('button'));
    expect(handleClose).toHaveBeenCalledTimes(2);
  });

  it('should not display modal window when isOpen set false', () => {
    const handleClose = vi.fn();
    const { queryByTestId } = render(
      <Modal isOpen={false} onClose={handleClose}>
        <p>Test</p>
      </Modal>
    );
    expect(queryByTestId(/modal/i)).not.toBeInTheDocument();
  });
});
