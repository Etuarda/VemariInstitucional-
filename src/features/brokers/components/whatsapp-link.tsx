'use client';

import { useMemo } from 'react';
import { trackWhatsAppLead } from '@/shared/lib/analytics';
import { resolveBrokerContact } from '../utils/resolve-broker-contact';

interface WhatsAppLinkProps {
  readonly brokerSlug?: string;
  readonly developmentName?: string;
  readonly label: string;
  readonly className?: string;
}

export function WhatsAppLink({
  brokerSlug,
  developmentName,
  label,
  className = '',
}: WhatsAppLinkProps) {
  const { href, trackingEventName } = useMemo(
    () => resolveBrokerContact({ brokerSlug, developmentName }),
    [brokerSlug, developmentName],
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() => trackWhatsAppLead(trackingEventName)}
    >
      {label}
    </a>
  );
}
