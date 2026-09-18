import type { BrokerReference } from '../types/attribution';

const STORAGE_KEY = 'vemari:broker-reference';
const DEFAULT_TTL_DAYS = 30;

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function persistBrokerReference(
  brokerSlug: string,
  ttlDays = DEFAULT_TTL_DAYS,
): BrokerReference {
  const now = new Date();
  const existing = readBrokerReference();

  // O primeiro toque é preservado para registrar a origem comercial inicial do lead.
  const reference: BrokerReference = {
    brokerSlug,
    firstTouchAt: existing?.firstTouchAt ?? now.toISOString(),
    lastTouchAt: now.toISOString(),
    expiresAt: addDays(now, ttlDays).toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reference));
  } catch {
    // Falha silenciosa caso o armazenamento local esteja desabilitado ou cheio.
  }

  return reference;
}

export function readBrokerReference(): BrokerReference | null {
  if (typeof window === 'undefined') return null;

  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) return null;

    const reference = JSON.parse(serialized) as BrokerReference;

    if (new Date(reference.expiresAt).getTime() <= Date.now()) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return reference;
  } catch {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignora erro ao limpar storage inválido
    }
    return null;
  }
}

