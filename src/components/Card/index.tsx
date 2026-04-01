import Image from 'next/image';
import styles from './index.module.css';

const GRID_BREAKPOINT_PX = 768;
const MOBILE_IMAGE_WIDTH_PX = 150;
const DESKTOP_IMAGE_WIDTH_VW = 33;

const IMAGE_SIZES = `(min-width: ${GRID_BREAKPOINT_PX}px) ${DESKTOP_IMAGE_WIDTH_VW}vw, ${MOBILE_IMAGE_WIDTH_PX}px`;

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
          sizes={IMAGE_SIZES}
          priority={priority}
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
