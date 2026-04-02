import Image from 'next/image';
import { IMAGE_SIZES } from './Card.constants';
import styles from './Card.module.css';

type CardProps = { name: string; image: string; priority?: boolean };

export function Card({ name, image, priority = false }: CardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={`Photo of ${name}`}
          className={styles.image}
          fill
          loading={priority ? 'eager' : 'lazy'}
          sizes={IMAGE_SIZES}
        />
      </div>
      <h3 className={`${styles.petName} h4`}>{name}</h3>
      <button className={styles.cta} aria-label={`View ${name}`}>
        <Image
          src="/icons/arrow-right.svg"
          alt=""
          width={24}
          height={24}
          className={styles.ctaIcon}
          aria-hidden
        />
        <span className={styles.ctaText}>View</span>
      </button>
    </li>
  );
}
