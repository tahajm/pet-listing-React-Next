import { Suspense } from 'react';
import { getSpecies } from '@/lib/api';
import { FilterBar } from '@/components/FilterBar';
import { PetList } from '@/components/PetList';
import { Skeleton } from '@/components/Skeleton';
import type { SearchParams } from '@/types';
import styles from './page.module.css';

type PageProps = { searchParams: Promise<SearchParams> };

export default async function Home({ searchParams: _searchParams }: PageProps) {
  const searchParams = await _searchParams;
  const species = await getSpecies();

  return (
    <main className="main">
      <h1>Pets</h1>
      <Suspense fallback={<Skeleton className={styles.filterBarSkeleton} />}>
        <FilterBar species={species} />
      </Suspense>
      <PetList searchParams={searchParams} />
    </main>
  );
}
