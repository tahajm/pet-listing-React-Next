import { Card } from '@/components/Card';
import { cacheLife, cacheTag } from 'next/cache';
import styles from './index.module.css';
import { getPets } from '@/lib/petApi';
import { SearchParams } from '@/types';
import { toQueryString } from '@/lib/util';

export async function PetList({ searchParams }: { searchParams: SearchParams }) {
  'use cache';
  cacheLife('minutes');
  cacheTag('petsList');

  const paramsString = toQueryString(searchParams);
  const pets = await getPets(paramsString);

  return (
    <section aria-labelledby="results-heading">
      <h2 id="results-heading">Results</h2>
      <div aria-live="polite" aria-atomic="true" className="srOnly">
        {`${pets.length} pets found`}
      </div>
      <ul className={styles.cardContainer}>
        {pets.map(pet => (
          <Card name={pet.name} image={pet.photoUrl} key={pet.id} />
        ))}
      </ul>
    </section>
  );
}
