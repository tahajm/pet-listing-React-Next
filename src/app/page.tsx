import { Suspense } from 'react';
import { getSpecies } from '@/lib/petApi';
import { FilterBar, PetList, Skeleton } from '@/components';
import { SearchParams } from '@/types';
import styles from './page.module.css';

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const searchParamsResolved = await searchParams;
  const species = await getSpecies();

  return (
    <main className="main">
      <h1>Pets</h1>
      <Suspense fallback={<Skeleton className={styles.filterBarSkeleton} />}>
        <FilterBar species={species} />
      </Suspense>
      <PetList searchParams={searchParamsResolved} />
    </main>
  );
}
