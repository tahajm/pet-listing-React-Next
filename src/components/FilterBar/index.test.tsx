import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';

import { FilterBar } from './index';

vi.mock('next/navigation');

const SPECIES = ['Cat', 'Dog', 'Rat'];

function setup(searchParams = '') {
  const push = vi.fn();
  vi.mocked(useRouter).mockReturnValue({ push } as ReturnType<typeof useRouter>);
  vi.mocked(useSearchParams).mockReturnValue(
    new URLSearchParams(searchParams) as ReturnType<typeof useSearchParams>,
  );
  vi.mocked(usePathname).mockReturnValue('/');

  render(<FilterBar species={SPECIES} />);

  return { push };
}

describe('FilterBar', () => {
  describe('rendering', () => {
    it('renders all species as options', () => {
      setup();

      expect(screen.getByRole('option', { name: 'Cat' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Dog' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Rat' })).toBeInTheDocument();
    });

    it('reflects pre-existing URL params on load', () => {
      setup('species=Dog&sortBy=dateAdded&order=desc');

      expect(screen.getByRole<HTMLSelectElement>('combobox').value).toBe('Dog');
      expect(screen.getByRole('button', { name: 'Latest added' })).toHaveAttribute(
        'aria-pressed',
        'true',
      );
    });
  });

  describe('latest added toggle', () => {
    it.each([['sortBy=dateAdded'], ['order=desc']])(
      'is not considered active with incomplete params: %s',
      async searchParams => {
        const { push } = setup(searchParams);

        await userEvent.click(screen.getByRole('button', { name: 'Latest added' }));

        const calledWith: string = push.mock.calls[0][0];
        expect(calledWith).toContain('sortBy=dateAdded');
        expect(calledWith).toContain('order=desc');
      },
    );

    it('navigates with sortBy and order when toggled on', async () => {
      const { push } = setup();

      await userEvent.click(screen.getByRole('button', { name: 'Latest added' }));

      expect(push).toHaveBeenCalledWith('/?sortBy=dateAdded&order=desc');
    });

    it('removes sortBy and order when toggled off', async () => {
      const { push } = setup('sortBy=dateAdded&order=desc');

      await userEvent.click(screen.getByRole('button', { name: 'Latest added' }));

      expect(push).toHaveBeenCalledWith('/?');
    });

    it('preserves existing species param when toggling on', async () => {
      const { push } = setup('species=Cat');

      await userEvent.click(screen.getByRole('button', { name: 'Latest added' }));

      expect(push).toHaveBeenCalledWith('/?species=Cat&sortBy=dateAdded&order=desc');
    });
  });

  describe('species select', () => {
    it('navigates with selected species', async () => {
      const { push } = setup();

      await userEvent.selectOptions(screen.getByRole('combobox'), 'Dog');

      expect(push).toHaveBeenCalledWith('/?species=Dog');
    });
  });
});
