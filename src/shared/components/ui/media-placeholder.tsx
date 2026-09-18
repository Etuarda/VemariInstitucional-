import styles from './media-placeholder.module.css';

interface MediaPlaceholderProps {
  readonly label: string;
  readonly className?: string;
}

export function MediaPlaceholder({ label, className = '' }: MediaPlaceholderProps) {
  return (
    <div className={`${styles.placeholder} ${className}`.trim()}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
