import type { Broker } from '../types/broker';

export const ALL_DEVELOPMENT_SLUGS = [
  'boa-vida',
  'nova-vida',
  'nova-esperanca',
  'jardins-umbuzeiro',
  'barreirinhas-ma',
  'nova-valenca',
] as const;

export const brokers: readonly Broker[] = [
  {
    id: 'cilene',
    slug: 'cilene',
    name: 'Cilene',
    firstName: 'Cilene',
    creci: 'PI 584-J',
    city: 'Valença do Piauí',
    state: 'PI',
    region: 'Valença e Região Centro-Sul',
    whatsapp: '558999991111',
    photo: '/brokers/cilene.webp',
    shortBio:
      'Atendimento Vemari dedicado a apresentar os empreendimentos com clareza, orientar sobre as informações disponíveis e facilitar o próximo passo de quem deseja conhecer um terreno.',
    developmentSlugs: [...ALL_DEVELOPMENT_SLUGS],
    active: true,
  },
  {
    id: 'leonardo-silva',
    slug: 'leonardo-silva',
    name: 'Leonardo Silva',
    firstName: 'Leonardo',
    creci: 'PI 4820',
    city: 'Valença do Piauí',
    state: 'PI',
    region: 'Valença e Novos Territórios',
    whatsapp: '558999992222',
    photo: '/brokers/leonardo.webp',
    shortBio:
      'Especialista em loteamentos residenciais e expansão urbana, auxiliando famílias e investidores com transparência e segurança jurídica.',
    developmentSlugs: [...ALL_DEVELOPMENT_SLUGS],
    active: true,
  },
  {
    id: 'yuri',
    slug: 'yuri',
    name: 'Yuri',
    firstName: 'Yuri',
    creci: 'PI 6125',
    city: 'Teresina',
    state: 'PI',
    region: 'Grande Teresina e Região',
    whatsapp: '5586988883333',
    photo: '/brokers/yuri.webp',
    shortBio:
      'Focado em oportunidades de investimento e novos empreendimentos com alto potencial de valorização urbana.',
    developmentSlugs: [...ALL_DEVELOPMENT_SLUGS],
    active: true,
  },
  {
    id: 'daniel-pereira',
    slug: 'daniel-pereira',
    name: 'Daniel Pereira',
    firstName: 'Daniel',
    creci: 'PI 5019',
    city: 'Valença do Piauí',
    state: 'PI',
    region: 'Valença e Centro-Sul Piauiense',
    whatsapp: '558999994444',
    photo: '/brokers/daniel.webp',
    shortBio:
      'Comprometido em oferecer um atendimento consultivo e próximo, orientando cada cliente na escolha ideal para seu projeto de vida.',
    developmentSlugs: [...ALL_DEVELOPMENT_SLUGS],
    active: true,
  },
  {
    id: 'fabio-carvalho',
    slug: 'fabio-carvalho',
    name: 'Fábio Carvalho',
    firstName: 'Fábio',
    creci: 'PI 5342',
    city: 'Pio IX',
    state: 'PI',
    region: 'Pio IX e Região do Oriente',
    whatsapp: '558999995555',
    photo: '/brokers/fabio.webp',
    shortBio:
      'Especialista local com profundo conhecimento do desenvolvimento urbano em Pio IX e região, prestando suporte completo em todas as etapas.',
    developmentSlugs: [...ALL_DEVELOPMENT_SLUGS],
    active: true,
  },
];

export const CENTRAL_BROKER_SLUG = 'vemari-central';
export const SALES_GENERAL_SLUG = 'vendas-geral';

export const vemariCentral: Broker = {
  id: CENTRAL_BROKER_SLUG,
  slug: CENTRAL_BROKER_SLUG,
  name: 'Vemari Central',
  firstName: 'Equipe Vemari',
  creci: 'PJ 584',
  city: 'Valença do Piauí',
  state: 'PI',
  region: 'Atendimento Vemari',
  whatsapp: '558999990000',
  shortBio:
    'Atendimento central da Vemari para orientar você sobre empreendimentos, disponibilidade e próximos passos.',
  developmentSlugs: [...ALL_DEVELOPMENT_SLUGS],
  active: true,
};

export const vendasGeral: Broker = {
  ...vemariCentral,
  id: SALES_GENERAL_SLUG,
  slug: SALES_GENERAL_SLUG,
  name: 'Vendas Geral',
};

const brokersBySlug = new Map<string, Broker>(
  [...brokers, vemariCentral, vendasGeral].map((broker) => [broker.slug, broker]),
);

export function getBrokerBySlug(slug: string): Broker | undefined {
  return brokersBySlug.get(slug);
}

export function getActiveBrokerBySlug(slug: string): Broker | undefined {
  const broker = brokersBySlug.get(slug);
  return broker?.active ? broker : undefined;
}

export function getAllActiveBrokers(): readonly Broker[] {
  return brokers.filter((broker) => broker.active);
}

export function getBrokersBySlugs(slugs: readonly string[]): Broker[] {
  const result: Broker[] = [];
  for (const slug of slugs) {
    const broker = brokersBySlug.get(slug);
    if (broker && broker.active) result.push(broker);
  }
  return result.length > 0 ? result : [...getAllActiveBrokers()];
}
