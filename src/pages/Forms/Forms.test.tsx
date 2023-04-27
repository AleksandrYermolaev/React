import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Forms from './Forms';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store';

describe('Forms Page', () => {
  const file = new File(['foo'], 'foo.jpg', {
    type: 'image/*',
  });

  beforeEach(() => {
    window.URL.createObjectURL = vi.fn(() => 'url');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render card on user input', async () => {
    const user = userEvent.setup();
    const { getByLabelText, getAllByRole, queryByRole, getByRole } = render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    expect(queryByRole('article')).not.toBeInTheDocument();
    await user.type(getByLabelText('Name:'), 'John');
    await user.type(getByLabelText(/surname/i), 'Doe');
    await user.type(getByLabelText(/birthday/i), '1993-01-22');
    await user.selectOptions(getByLabelText(/family/i), 'single');
    await user.click(getAllByRole('radio')[0]);
    await user.upload(getByLabelText(/photo/i), file);
    await user.click(getAllByRole('checkbox')[0]);
    await user.click(getByRole('button'));
    expect(getByRole('article')).toBeInTheDocument();
  });
});
