import type { AnalyticsPayload } from '../types/analytics';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, payload: AnalyticsPayload = {}): void {
  if (typeof window === 'undefined') return;

  try {
    window.gtag?.('event', name, payload);
  } catch {
    // Falha silenciosa: a conversão comercial nunca deve ser bloqueada por erro no provedor de telemetria.
  }
}

export function trackWhatsAppLead(contentName: string): void {
  if (typeof window === 'undefined') return;

  trackEvent('generate_lead', {
    currency: 'BRL',
    content_name: contentName,
  });

  try {
    window.fbq?.('track', 'Lead', { content_name: contentName });
  } catch {
    // Falha silenciosa intencional caso Meta Pixel esteja bloqueado pelo navegador.
  }
}
