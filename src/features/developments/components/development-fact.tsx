import styles from './development-fact.module.css';

interface DevelopmentFactProps {
  readonly label: string;
  readonly value: string;
  readonly className?: string;
}

export function DevelopmentFact({ label, value, className = '' }: DevelopmentFactProps) {
  return (
    <div className={`${styles.fact} ${className}`.trim()}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.value}>{value}</dd>
    </div>
  );
}
