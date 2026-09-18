import type { Development } from '../types/development';

export const ALL_ACTIVE_BROKER_SLUGS = [
  'cilene',
  'leonardo-silva',
  'yuri',
  'daniel-pereira',
  'fabio-carvalho',
] as const;

export const developments: readonly Development[] = [
  {
    id: 'boa-vida',
    slug: 'boa-vida',
    name: 'Boa Vida',
    city: 'Valença do Piauí',
    state: 'PI',
    status: 'available',
    tagline: 'Um território que faz parte dos primeiros capítulos da nossa história.',
    description:
      'O Boa Vida integra a trajetória de crescimento da empresa em Valença e ajuda a contar como os primeiros projetos começaram a transformar planejamento em novos endereços.',
    commercialStatus: '[VALIDAR]',
    availability: '[VALIDAR]',
    infrastructure: [],
    progress: [],
    faqs: [],
    brokerSlugs: [...ALL_ACTIVE_BROKER_SLUGS],
    featured: false,
  },
  {
    id: 'nova-vida',
    slug: 'nova-vida',
    name: 'Nova Vida',
    city: 'Valença do Piauí',
    state: 'PI',
    status: 'available',
    tagline: 'Novos endereços também constroem a história de uma cidade.',
    description:
      'Nova Vida integra os primeiros ciclos da empresa em Valença e representa mais um capítulo da experiência construída antes da chegada da marca Vemari.',
    commercialStatus: '[VALIDAR]',
    availability: '[VALIDAR]',
    infrastructure: [],
    progress: [],
    faqs: [],
    brokerSlugs: [...ALL_ACTIVE_BROKER_SLUGS],
    featured: false,
  },
  {
    id: 'nova-esperanca',
    slug: 'nova-esperanca',
    name: 'Nova Esperança',
    city: 'Inhuma',
    state: 'PI',
    status: 'delivered',
    launchYear: 2021,
    tagline: 'Um novo município. Um novo capítulo.',
    description:
      'O Nova Esperança marcou a expansão da empresa para Inhuma em 2021 e representa um dos primeiros movimentos de crescimento para além de Valença do Piauí.',
    commercialStatus: '[VALIDAR]',
    availability: '[VALIDAR]',
    infrastructure: [],
    progress: [],
    faqs: [],
    brokerSlugs: [...ALL_ACTIVE_BROKER_SLUGS],
    featured: false,
  },
  {
    id: 'jardins-umbuzeiro',
    slug: 'jardins-umbuzeiro',
    name: 'Jardins Umbuzeiro',
    city: 'Pio IX',
    state: 'PI',
    status: 'launch',
    launchDate: '29/08/2026',
    launchYear: 2026,
    region: 'Região do Oriente',
    type: 'Bairro planejado',
    salesHighlight: '80% dos lotes vendidos no lançamento.',
    tagline: 'O primeiro bairro planejado de Pio IX.',
    description:
      'Na região do Oriente, um novo território pensado para acompanhar a expansão da cidade e abrir espaço para novas histórias. O lançamento movimentou a região com alta procura e proposta de ocupação estruturada.',
    areaMin: 200,
    areaMax: 400,
    totalLots: 280,
    infrastructure: [
      'PAVIMENTAÇÃO ASFÁLTICA / BLOQUETE',
      'REDE DE ABASTECIMENTO DE ÁGUA',
      'REDE DE ENERGIA ELÉTRICA',
      'ILUMINAÇÃO PÚBLICA',
      'DRENAGEM DE ÁGUAS PLUVIAIS',
      'SINALIZAÇÃO VIÁRIA',
    ],
    progress: [
      { key: 'terraplanagem', label: 'Terraplanagem', percentage: 100 },
      { key: 'rede-de-agua', label: 'Rede de Água', percentage: 90 },
      { key: 'pavimentacao', label: 'Pavimentação', percentage: 70 },
      { key: 'instalacao-eletrica', label: 'Instalação Elétrica', percentage: 85 },
    ],
    faqs: [
      {
        question: 'Como funciona a compra no Jardins Umbuzeiro?',
        answer: 'A equipe comercial apresenta as opções disponíveis e as condições vigentes aprovadas para o empreendimento.',
      },
      {
        question: 'Quais são as metragens dos lotes?',
        answer: 'Os lotes possuem tamanhos a partir de 200 m², planejados para diferentes perfis de construção ou investimento.',
      },
    ],
    brokerSlugs: [...ALL_ACTIVE_BROKER_SLUGS],
    featured: true,
  },
  {
    id: 'barreirinhas-ma',
    slug: 'barreirinhas-ma',
    name: 'Barreirinhas',
    city: 'Barreirinhas',
    state: 'MA',
    status: 'in-development',
    launchYear: 2026,
    commercialStatus: 'Pré-lançamento',
    availability: '[A DEFINIR]',
    tagline: 'Um novo capítulo está sendo preparado no Maranhão.',
    description:
      'A Vemari amplia sua presença territorial com um futuro lançamento em Barreirinhas. Cadastre seu interesse para receber as primeiras informações oficiais do projeto assim que forem apresentadas.',
    areaMin: 250,
    areaMax: 500,
    totalLots: 350,
    infrastructure: [
      'PLANEJAMENTO URBANO SUSTENTÁVEL',
      'REDE DE ABASTECIMENTO DE ÁGUA',
      'REDE DE ENERGIA ELÉTRICA',
      'ILUMINAÇÃO PÚBLICA',
      'VIAS DE ACESSO PLANEJADAS',
      'SINALIZAÇÃO',
    ],
    progress: [
      { key: 'projeto-urbanistico', label: 'Projeto Urbanístico', percentage: 100 },
      { key: 'licenciamento', label: 'Licenciamento', percentage: 85 },
      { key: 'terraplanagem-preliminar', label: 'Terraplanagem Preliminar', percentage: 30 },
    ],
    faqs: [
      {
        question: 'Quando será o lançamento oficial?',
        answer: 'A previsão de lançamento é para 2026. Cadastre seu contato para ser avisado em primeira mão.',
      },
    ],
    brokerSlugs: [...ALL_ACTIVE_BROKER_SLUGS],
    featured: false,
  },
  {
    id: 'nova-valenca',
    slug: 'nova-valenca',
    name: 'Nova Valença',
    city: 'Valença do Piauí',
    state: 'PI',
    status: 'under-construction',
    commercialStatus: '[VALIDAR]',
    availability: '[VALIDAR]',
    salesHighlight: 'Obras avançadas com moradores construindo.',
    tagline: 'Expansão urbana planejada para o seu próximo endereço ou investimento.',
    description:
      'Um projeto moderno pensado para acompanhar o crescimento acelerado da região de Valença, unindo natureza, mobilidade urbana e infraestrutura de ponta.',
    areaMin: 250,
    areaMax: 450,
    totalLots: 220,
    infrastructure: [
      'PAVIMENTAÇÃO ASFÁLTICA / BLOQUETE',
      'REDE DE ABASTECIMENTO DE ÁGUA',
      'REDE DE ENERGIA ELÉTRICA',
      'ILUMINAÇÃO PÚBLICA',
      'DRENAGEM DE ÁGUAS PLUVIAIS',
      'SINALIZAÇÃO VIÁRIA',
    ],
    progress: [
      { key: 'terraplanagem', label: 'Terraplanagem', percentage: 100 },
      { key: 'rede-de-agua', label: 'Rede de Água', percentage: 85 },
      { key: 'pavimentacao', label: 'Pavimentação', percentage: 60 },
      { key: 'instalacao-eletrica', label: 'Instalação Elétrica', percentage: 75 },
    ],
    faqs: [
      {
        question: 'Quais documentos são necessários para adquirir um lote?',
        answer: 'Documento de identificação oficial, CPF, comprovante de residência e estado civil.',
      },
    ],
    brokerSlugs: [...ALL_ACTIVE_BROKER_SLUGS],
    featured: true,
  },
];

const developmentsBySlug = new Map<string, Development>(
  developments.map((development) => [development.slug, development]),
);

const featuredDevelopments = developments.filter((development) => development.featured);

export function getDevelopmentBySlug(slug: string): Development | undefined {
  return developmentsBySlug.get(slug);
}

export function getFeaturedDevelopments(): readonly Development[] {
  return featuredDevelopments;
}

export function getAllDevelopments(): readonly Development[] {
  return developments;
}

export function getDevelopmentsBySlugs(slugs: readonly string[]): Development[] {
  const result: Development[] = [];
  for (const slug of slugs) {
    const development = developmentsBySlug.get(slug);
    if (development) result.push(development);
  }
  return result.length > 0 ? result : [...developments];
}
