'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getActiveBrokerBySlug } from '@/features/brokers/data/brokers';
import { persistBrokerReference } from '../lib/attribution-storage';

export function BrokerReferencePersistence() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const brokerSlug = searchParams.get('ref');
    if (!brokerSlug) return;

    // Apenas corretores ativos conhecidos são persistidos para evitar injeção de referências espúrias.
    if (getActiveBrokerBySlug(brokerSlug)) {
      persistBrokerReference(brokerSlug);
    }
  }, [searchParams]);

  return null;
}
