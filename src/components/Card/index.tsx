import Image from 'next/image';
import styles from './index.module.css';

export function Card({
  name,
  image,
  priority = false,
}: {
  name: string;
  image: string;
  priority?: boolean;
}) {
  return (
    <li className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={`Photo of ${name}`}
          className={styles.image}
          fill
          sizes="(min-width: 768px) 33vw, 150px"
          priority={priority}
        />
      </div>
      <h3 className={`${styles.petName} h4`}>{name}</h3>
      <a href="#petDetail" className={styles.cta} aria-label={`View ${name}`}>
        View
      </a>
    </li>
  );
}
