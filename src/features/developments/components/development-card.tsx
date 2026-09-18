import Link from 'next/link';
import { DevelopmentColorField } from './development-color-field';
import { formatDevelopmentStatus } from '../constants/development-status';
import type { Development } from '../types/development';
import { formatAreaRange } from '../utils/format-area';
import { resolveDevelopmentRoute } from '../utils/resolve-development-route';
import styles from './development-card.module.css';

interface DevelopmentCardProps {
  readonly development: Development;
}

export function DevelopmentCard({ development }: DevelopmentCardProps) {
  const area = formatAreaRange(development.areaMin, development.areaMax);
  const targetRoute = resolveDevelopmentRoute(development);
  const statusText = development.commercialStatus ?? formatDevelopmentStatus(development.status);

  return (
    <article className={styles.card}>
      <DevelopmentColorField
        name={development.name}
        city={development.city}
        state={development.state}
        status={statusText}
        slug={development.slug}
        variant="card"
      />

      <div className={styles.infoRow}>
        <div>
          <p className={styles.location}>
            {development.city} — {development.state}
          </p>
          <h3 className={styles.name}>{development.name}</h3>
          <p className={styles.tagline}>{development.tagline}</p>
          {area ? <p className={styles.lots}>LOTES {area}</p> : null}
          <p className={styles.status}>{statusText}</p>
          {development.salesHighlight ? (
            <p className={styles.highlight}>{development.salesHighlight}</p>
          ) : null}
        </div>
        <Link href={targetRoute} className={styles.link}>
          Conhecer →
        </Link>
      </div>
    </article>
  );
}
