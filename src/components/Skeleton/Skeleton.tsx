import styles from './Skeleton.module.css';

type SkeletonProps = { className?: string };

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`${styles.skeleton} ${className ?? ''}`}
    />
  );
}
