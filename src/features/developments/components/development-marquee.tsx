import Link from 'next/link';
import { DevelopmentColorField } from './development-color-field';
import { formatDevelopmentStatus } from '../constants/development-status';
import type { Development } from '../types/development';
import { formatAreaRange } from '../utils/format-area';
import { resolveDevelopmentRoute } from '../utils/resolve-development-route';
import styles from './development-marquee.module.css';

interface DevelopmentMarqueeProps {
  readonly items: readonly Development[];
}

export function DevelopmentMarquee({ items }: DevelopmentMarqueeProps) {
  // A esteira é ativada quando houver mais de 1 empreendimento cadastrado
  if (items.length <= 1) {
    return null;
  }

  // Duplicamos a lista para criar um looping contínuo sem cortes visuais
  const loopedItems = [...items, ...items];

  return (
    <div
      className={styles.marqueeContainer}
      role="region"
      aria-label="Esteira contínua de empreendimentos"
    >
      <div className={styles.track}>
        {loopedItems.map((development, index) => {
          const targetRoute = resolveDevelopmentRoute(development);
          const area = formatAreaRange(development.areaMin, development.areaMax);
          const statusText =
            development.commercialStatus ?? formatDevelopmentStatus(development.status);

          return (
            <Link
              key={`${development.id}-${index}`}
              href={targetRoute}
              className={styles.card}
              aria-label={`Ver detalhes de ${development.name}`}
            >
              <div className={styles.imageWrapper}>
                <DevelopmentColorField
                  name={development.name}
                  city={development.city}
                  state={development.state}
                  status={statusText}
                  slug={development.slug}
                  variant="marquee"
                  showDetails={false}
                />
                <span className={styles.statusBadge}>{statusText}</span>
              </div>

              <div className={styles.body}>
                <div>
                  <p className={styles.location}>
                    {development.city} — {development.state}
                  </p>
                  <h3 className={styles.name}>{development.name}</h3>
                  <p className={styles.tagline}>{development.tagline}</p>
                </div>

                <div className={styles.footer}>
                  <span className={styles.lots}>{area ? `Lotes ${area}` : 'Consulte lotes'}</span>
                  <span className={styles.cta}>Conhecer →</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
