import type { DevelopmentStatus } from '../types/development';

export const DEVELOPMENT_STATUS_LABELS: Record<DevelopmentStatus, string> = {
  launch: 'Lançamento',
  'in-development': 'Em desenvolvimento',
  'under-construction': 'Em obras',
  available: 'Disponível',
  delivered: 'Entregue',
  'sold-out': '100% vendido',
};

export const DEVELOPMENT_STATUS_FILTER_OPTIONS: ReadonlyArray<readonly [DevelopmentStatus, string]> = [
  ['launch', 'Lançamento'],
  ['in-development', 'Em desenvolvimento'],
  ['under-construction', 'Em obras'],
  ['available', 'Disponível'],
  ['delivered', 'Entregue'],
  ['sold-out', '100% vendido'],
];

export function formatDevelopmentStatus(status: DevelopmentStatus): string {
  return DEVELOPMENT_STATUS_LABELS[status] ?? status;
}

