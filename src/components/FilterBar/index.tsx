'use client';

import styles from './index.module.css';
import { useFilterBar } from './index.hooks';

export function FilterBar({ species }: Readonly<{ species: string[] }>) {
  const { handleChangeSpecies, toggleLatestEnabled, isLatestEnabled, selectedSpecies } =
    useFilterBar();

  return (
    <form role="search" aria-label="Filter pets" className={styles.form}>
      <fieldset className={styles.filterBar}>
        <legend className="srOnly">Filter pets</legend>
        <div className={styles.selectWrapper}>
          <label htmlFor="pet-species-select" className="srOnly">
            Filter by species
          </label>
          <select
            name="petSpecies"
            id="pet-species-select"
            value={selectedSpecies}
            onChange={handleChangeSpecies}
            className={styles.select}
          >
            <option value="">Species</option>
            {species.map(speciesItem => (
              <option value={speciesItem} key={speciesItem}>
                {speciesItem}
              </option>
            ))}
          </select>
          <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" className={styles.chevron} />
        </div>
        <button
          type="button"
          onClick={toggleLatestEnabled}
          className={styles.toggle}
          aria-pressed={isLatestEnabled}
        >
          Latest added
        </button>
      </fieldset>
    </form>
  );
}
