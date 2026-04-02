import { cacheLife, cacheTag } from 'next/cache';
import { getPets } from '@/lib/api';
import { toQueryString } from '@/lib/utils';
import { Card } from '@/components/Card';
import { SearchParams } from '@/types';
import styles from './index.module.css';

type PetListProps = { searchParams: SearchParams };

export async function PetList({ searchParams }: PetListProps) {
  'use cache';
  cacheLife('minutes');
  cacheTag('petsList');

  const paramsString = toQueryString(searchParams);
  const pets = await getPets(paramsString);
  const hasPets = pets.length > 0;

  return (
    <section aria-labelledby="results-heading">
      <h2 id="results-heading">Results</h2>
      <div aria-live="polite" aria-atomic="true" className="srOnly">
        {`${pets.length} pets found`}
      </div>
      {hasPets ? (
        <ul className={styles.cardContainer}>
          {pets.map(pet => (
            <Card name={pet.name} image={pet.photoUrl} key={pet.id} />
          ))}
        </ul>
      ) : (
        <p>No pets match the selected filters.</p>
      )}
    </section>
  );
}
