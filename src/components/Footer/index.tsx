import styles from './index.module.css';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.band} />
      <p className={styles.copyright}>© 1996 - 2024 · Pets B.V.</p>
    </footer>
  );
};
