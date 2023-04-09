import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CharacterInfo from './CharacterInfo';

describe('Character info modal content', () => {
  it('should display skeleton when load is not over', async () => {
    const { getByTitle } = render(<CharacterInfo id={1} />);
    expect(getByTitle(/loading/i)).toBeInTheDocument();
  });
  it('should display character info for the first character', async () => {
    const { findByRole } = render(<CharacterInfo id={1} />);
    expect(await findByRole('heading')).toHaveTextContent(/user1/i);
  });
  it('should display character info for the second character', async () => {
    const { findByRole } = render(<CharacterInfo id={2} />);
    expect(await findByRole('heading')).toHaveTextContent(/user2/i);
  });
});
