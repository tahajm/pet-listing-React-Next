import { Suspense, cache } from 'react';
import { getPets, getSpecies } from '@/lib/petApi';
import { toQueryString } from '@/lib/util';
import { Container, FilterBar, Card } from '@/components';
import { SearchParams } from '@/types';
import styles from './page.module.css';

const cachedGetSpecies = cache(getSpecies);

const FilterBarFallback = () => {
  return <div className={styles.filterBarSkeleton} />;
};

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const paramsString = toQueryString(params);
  const pets = await getPets(paramsString);
  const species = await cachedGetSpecies();
  return (
    <main className={styles.main}>
      <Container>
        <h1>Pets</h1>
        <Suspense fallback={<FilterBarFallback />}>
          <FilterBar species={species} />
        </Suspense>
        <section aria-labelledby="results-heading">
          <h2 id="results-heading">Results</h2>
          <ul className={styles.cardContainer}>
            {pets.map((pet, index) => (
              <Card name={pet.name} image={pet.photoUrl} key={pet.id} priority={index === 0} />
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
