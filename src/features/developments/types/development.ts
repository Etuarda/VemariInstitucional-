export type DevelopmentStatus =
  | 'launch'
  | 'in-development'
  | 'under-construction'
  | 'available'
  | 'delivered'
  | 'sold-out';

export interface DevelopmentProgress {
  readonly key: string;
  readonly label: string;
  readonly percentage: number;
  readonly updatedAt?: string;
}

export interface DevelopmentFaq {
  readonly question: string;
  readonly answer: string;
}

export interface Development {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly city: string;
  readonly state: string;
  readonly region?: string;
  readonly type?: string;
  readonly launchYear?: number;
  readonly launchDate?: string;
  readonly commercialStatus?: string;
  readonly availability?: string;
  readonly status: DevelopmentStatus;
  readonly tagline: string;
  readonly description: string;
  readonly image?: string;
  readonly areaMin?: number;
  readonly areaMax?: number;
  readonly totalLots?: number;
  readonly salesHighlight?: string;
  readonly infrastructure: readonly string[];
  readonly progress: readonly DevelopmentProgress[];
  readonly faqs: readonly DevelopmentFaq[];
  readonly brokerSlugs: readonly string[];
  readonly featured: boolean;
}

