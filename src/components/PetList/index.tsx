import { Card } from '@/components/Card';
import { Pet } from '@/types';
import styles from './index.module.css';

export function PetList({ pets }: { pets: Pet[] }) {
  return (
    <section aria-labelledby="results-heading">
      <h2 id="results-heading">Results</h2>
      <div aria-live="polite" aria-atomic="true" className="srOnly">
        {`${pets.length} pets found`}
      </div>
      <ul className={styles.cardContainer}>
        {pets.map((pet, index) => (
          <Card name={pet.name} image={pet.photoUrl} key={pet.id} />
        ))}
      </ul>
    </section>
  );
}
