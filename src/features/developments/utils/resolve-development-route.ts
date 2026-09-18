import { routes } from '@/shared/lib/routes';
import type { Development } from '../types/development';

export function resolveDevelopmentRoute(development: Pick<Development, 'slug'>): string {
  if (development.slug === 'barreirinhas-ma') {
    return routes.barreirinhasLaunch;
  }
  return routes.development(development.slug);
}

