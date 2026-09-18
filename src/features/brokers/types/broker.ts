export interface BrokerStats {
  readonly clients?: number;
  readonly developments?: number;
  readonly yearsExperience?: number;
}

export interface Broker {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly firstName: string;
  readonly creci: string;
  readonly city: string;
  readonly state: string;
  readonly region: string;
  readonly whatsapp: string;
  readonly photo?: string;
  readonly shortBio: string;
  readonly developmentSlugs: readonly string[];
  readonly stats?: BrokerStats;
  readonly active: boolean;
}

