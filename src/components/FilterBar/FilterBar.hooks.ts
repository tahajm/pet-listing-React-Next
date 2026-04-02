import { type ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateQueryString } from '@/lib/utils';

export function useFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const sortBy = searchParams.get('sortBy');
  const order = searchParams.get('order');
  const species = searchParams.get('species');

  const isLatestEnabled = sortBy === 'dateAdded' && order === 'desc';
  const selectedSpecies = species ?? '';

  const transitionRouteByQueryString = (queryString: string) => {
    startTransition(() => {
      router.push(queryString ? `${pathname}?${queryString}` : pathname);
    });
  };

  const toggleLatestEnabled = () => {
    const newQueries = isLatestEnabled
      ? { sortBy: '', order: '' }
      : { sortBy: 'dateAdded', order: 'desc' };
    const queryString = updateQueryString(searchParams, newQueries);
    transitionRouteByQueryString(queryString);
  };

  const handleChangeSpecies = (e: ChangeEvent<HTMLSelectElement>) => {
    const queryString = updateQueryString(searchParams, { species: e.target.value });
    transitionRouteByQueryString(queryString);
  };

  return {
    toggleLatestEnabled,
    handleChangeSpecies,
    selectedSpecies,
    isLatestEnabled,
    isPending,
  };
}
