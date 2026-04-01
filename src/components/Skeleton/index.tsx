import styles from './index.module.css';

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`${styles.skeleton} ${className ?? ''}`}
    />
  );
}
