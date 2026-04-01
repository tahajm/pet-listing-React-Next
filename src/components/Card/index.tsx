import styles from './index.module.css';

export function Card({ name, image }: { name: string; image: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h3 className={`${styles.petName} h4`}>{name}</h3>
      <a href="#petDetail" className={styles.cta}>
        View
      </a>
    </div>
  );
}
