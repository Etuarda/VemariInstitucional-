import { readBrokerReference } from '@/features/attribution/lib/attribution-storage';
import { buildWhatsAppUrl } from '@/shared/lib/whatsapp';
import { getActiveBrokerBySlug, vemariCentral } from '../data/brokers';
import type { Broker } from '../types/broker';

interface BrokerContactInput {
  readonly brokerSlug?: string;
  readonly developmentName?: string;
}

interface BrokerContactResolution {
  readonly broker: Broker;
  readonly href: string;
  readonly trackingEventName: string;
}

export function resolveBrokerContact({
  brokerSlug,
  developmentName,
}: BrokerContactInput): BrokerContactResolution {
  let broker: Broker;

  if (brokerSlug) {
    broker = getActiveBrokerBySlug(brokerSlug) ?? vemariCentral;
  } else {
    const persisted = readBrokerReference();
    broker = (persisted && getActiveBrokerBySlug(persisted.brokerSlug)) || vemariCentral;
  }

  const href = buildWhatsAppUrl({
    phone: broker.whatsapp,
    brokerName: broker.slug === vemariCentral.slug ? undefined : broker.firstName,
    developmentName,
  });

  const trackingEventName = `whatsapp:${broker.slug}:${developmentName ?? 'general'}`;

  return {
    broker,
    href,
    trackingEventName,
  };
}

