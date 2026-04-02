import styles from './index.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/icons/pet-icon.svg" alt="Coolblue Pets Logo" />
    </header>
  );
}
