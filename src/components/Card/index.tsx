import Image from 'next/image';
import styles from './index.module.css';
import { IMAGE_SIZES } from './index.constants';

type CardProps = { name: string; image: string };

export function Card({ name, image }: CardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={`Photo of ${name}`}
          className={styles.image}
          fill
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
