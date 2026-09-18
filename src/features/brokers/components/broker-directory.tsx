import type { Broker } from '../types/broker';
import { BrokerCard } from './broker-card';
import { SalesCard } from './sales-card';
import styles from './broker-directory.module.css';

interface BrokerDirectoryProps {
  readonly items: readonly Broker[];
}

export function BrokerDirectory({ items }: BrokerDirectoryProps) {
  return (
    <div className={styles.directoryGrid}>
      {items.map((broker) => (
        <BrokerCard key={broker.id} broker={broker} />
      ))}
      <SalesCard />
    </div>
  );
}
