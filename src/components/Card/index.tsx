import Image from 'next/image';
import {
  TABLET_BREAKPOINT_PX,
  MOBILE_IMAGE_WIDTH_PX,
  DESKTOP_IMAGE_WIDTH_VW,
} from '@/lib/constants';
import { CardProps } from './index.types';
import styles from './index.module.css';

const IMAGE_SIZES = `(min-width: ${TABLET_BREAKPOINT_PX}px) ${DESKTOP_IMAGE_WIDTH_VW}vw, ${MOBILE_IMAGE_WIDTH_PX}px`;

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
