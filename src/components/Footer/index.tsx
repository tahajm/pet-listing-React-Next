import styles from './index.module.css';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.band} />
      <p className={styles.copyright}>© 1996 - {new Date().getFullYear()} · Pets B.V.</p>
    </footer>
  );
};
