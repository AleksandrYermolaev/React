import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from './Home';
import userEvent from '@testing-library/user-event';

describe('Home Page', () => {
  it('should probably handle user input', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Home />);
    expect(getByRole('textbox')).toHaveValue('');
    await user.type(getByRole('textbox'), 'custom input');
    expect(screen.getByRole('textbox')).toHaveValue('custom input');
  });
});
