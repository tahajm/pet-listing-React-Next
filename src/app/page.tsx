import { Suspense, cache } from 'react';
import { getPets, getSpecies } from '@/lib/petApi';
import { toQueryString } from '@/lib/util';
import { FilterBar, PetList, Skeleton } from '@/components';
import { SearchParams } from '@/types';
import styles from './page.module.css';

const cachedGetSpecies = cache(getSpecies);

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const paramsString = toQueryString(params);
  const pets = await getPets(paramsString);
  const species = await cachedGetSpecies();
  return (
    <main className="main">
      <h1>Pets</h1>
      <Suspense fallback={<Skeleton className={styles.filterBarSkeleton} />}>
        <FilterBar species={species} />
      </Suspense>
      <PetList pets={pets} />
    </main>
  );
}
