import Link from 'next/link';
import { MediaPlaceholder } from '@/shared/components/ui/media-placeholder';
import { routes } from '@/shared/lib/routes';
import type { Broker } from '../types/broker';
import styles from './broker-card.module.css';

interface BrokerCardProps {
  readonly broker: Broker;
}

export function BrokerCard({ broker }: BrokerCardProps) {
  return (
    <article className={styles.card}>
      {broker.photo ? (
        <img
          src={broker.photo}
          alt={`Retrato de ${broker.name}`}
          className={styles.portrait}
          loading="lazy"
        />
      ) : (
        <MediaPlaceholder label={`Retrato de ${broker.name}`} className="aspect-[3/4]" />
      )}

      <p className={styles.role}>Corretor Vemari</p>
      <h3 className={styles.name}>{broker.name}</h3>
      <p className={styles.creci}>
        CRECI {broker.creci} · {broker.city} — {broker.state}
      </p>
      <p className={styles.bio}>{broker.shortBio}</p>
      <Link href={routes.broker(broker.slug)} className={styles.link}>
        Ver perfil →
      </Link>
    </article>
  );
}
