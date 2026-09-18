import type { Development } from '../types/development';

interface DevelopmentFilterCriteria {
  readonly city: string;
  readonly status?: string;
}

export function extractUniqueCities(items: readonly Development[]): readonly string[] {
  return Array.from(new Set(items.map((item) => item.city))).sort();
}

export function filterDevelopments(
  items: readonly Development[],
  { city, status }: DevelopmentFilterCriteria,
): readonly Development[] {
  return items.filter((item) => {
    const matchesCity = city === 'all' || item.city === city;
    const matchesStatus = !status || status === 'all' || item.status === status;
    return matchesCity && matchesStatus;
  });
}
