export function formatAreaRange(areaMin?: number, areaMax?: number): string | null {
  if (!areaMin || !areaMax) return null;
  return `${areaMin} a ${areaMax} m²`;
}

