export const institutionalContent = {
  annualTheme: 'O futuro se constrói no dia a dia.',
  mission: 'Transformar realidades através da evolução pessoal dos talentos impactando clientes.',
  worldview: {
    headline: 'Pessoas alcançando seu máximo potencial.',
    pillars: [
      { label: 'Espírito', value: 'Maduro' },
      { label: 'Mente', value: 'Equilibrada' },
      { label: 'Corpo', value: 'Funcional' },
    ],
  },
  purpose: 'Criar um ambiente próspero, rompendo barreiras espirituais, mentais e físicas.',
  values: [
    'Valorizamos a inovação',
    'Jogamos abertamente',
    'Desafiamos nossos limites',
    'Cuidamos da organização',
    'Realizamos o impossível',
  ],
  valueDescriptions: [
    'Evoluir exige abertura para novas ideias, soluções e formas de fazer melhor.',
    'Confiança depende de clareza, comunicação direta e responsabilidade com aquilo que foi combinado.',
    'Crescer exige sair do automático e buscar continuamente novos níveis de resultado.',
    'Organização transforma intenção em execução consistente.',
    'Grandes resultados começam quando desafios são enfrentados com coragem, planejamento e execução.',
  ],
} as const;

export interface CompanyLocation {
  readonly id: string;
  readonly city: string;
  readonly state: string;
  readonly location: string;
  readonly region: string;
  readonly tagline: string;
  readonly description: string;
  readonly developmentSlugs: readonly string[];
  readonly isOperationalBase?: boolean;
}

export const companyLocations: readonly CompanyLocation[] = [
  {
    id: 'valenca-do-piaui',
    city: 'Valença do Piauí',
    state: 'PI',
    location: 'Valença do Piauí — PI',
    region: 'Vale do Sambito',
    tagline: 'Berço da nossa história e polo de expansão urbana.',
    description:
      'Valença do Piauí é a origem da trajetória da Vemari. Foi aqui que os primeiros ciclos ganharam vida com projetos que estruturaram novos bairros e oportunidades para centenas de famílias.',
    developmentSlugs: ['boa-vida', 'nova-vida', 'nova-valenca'],
  },
  {
    id: 'pio-ix',
    city: 'Pio IX',
    state: 'PI',
    location: 'Pio IX — PI',
    region: 'Região do Oriente',
    tagline: 'O primeiro bairro planejado de Pio IX.',
    description:
      'Na Região do Oriente piauiense, Pio IX recebeu o Jardins Umbuzeiro, um marco no urbanismo da cidade com planejamento moderno, infraestrutura completa e sucesso absoluto de vendas.',
    developmentSlugs: ['jardins-umbuzeiro'],
  },
  {
    id: 'inhuma',
    city: 'Inhuma',
    state: 'PI',
    location: 'Inhuma — PI',
    region: 'Vale do Sambito',
    tagline: 'Expansão pioneira no Centro-Sul Piauiense.',
    description:
      'Em 2021, a empresa deu seu primeiro grande passo além dos limites de Valença ao chegar a Inhuma com o loteamento Nova Esperança, consolidando o compromisso com o desenvolvimento regional.',
    developmentSlugs: ['nova-esperanca'],
  },
  {
    id: 'barreirinhas',
    city: 'Barreirinhas',
    state: 'MA',
    location: 'Barreirinhas — MA',
    region: 'Lençóis Maranhenses',
    tagline: 'Expansão interestadual com alto potencial.',
    description:
      'Portal de entrada dos Lençóis Maranhenses e referência turística nacional, Barreirinhas recebe a expansão interestadual da Vemari com um futuro empreendimento planejado.',
    developmentSlugs: ['barreirinhas-ma'],
  },
  {
    id: 'mata-roma',
    city: 'Mata Roma',
    state: 'MA',
    location: 'Mata Roma — MA',
    region: 'Leste Maranhense',
    tagline: 'Presença empresarial e operacional.',
    description:
      'Base de atuação corporativa e operacional da Vemari no estado do Maranhão desde 2025, acompanhando o crescimento regional e preparando novos ciclos.',
    developmentSlugs: [],
    isOperationalBase: true,
  },
] as const;

export const aboutStory = [
  {
    eyebrow: '2017 / VALENÇA DO PIAUÍ',
    title: 'Tudo começou em Valença.',
    body: [
      'Em 2017 começava a trajetória da então Agiliza Loteamentos. O primeiro loteamento reunia 157 lotes e colocava em prática uma ideia simples: criar caminhos para que mais pessoas pudessem conquistar um terreno e construir algo próprio.',
      'Antes de existir expansão, existia execução. Antes de existir uma nova marca, existia o compromisso de cumprir aquilo que havia sido prometido.',
    ],
    requiresInternalApproval: true,
  },
  {
    eyebrow: 'PRIMEIRAS ENTREGAS',
    title: 'A confiança precisava sair do papel.',
    body: [
      'Boa Vida, Nova Valença e Nova Vida fazem parte dos primeiros capítulos da empresa em Valença do Piauí. Cada empreendimento ajudou a construir experiência, relacionamento e confiança.',
    ],
    requiresInternalApproval: true,
  },
  {
    eyebrow: '2021 / INHUMA',
    title: 'A história ultrapassa os limites de Valença.',
    body: [
      'Em 2021, a empresa chegou a Inhuma com o Nova Esperança. Era um novo município, um novo público e mais um passo na expansão da trajetória iniciada em Valença.',
    ],
    requiresInternalApproval: true,
  },
  {
    eyebrow: 'EVOLUÇÃO',
    title: 'Ser melhor do que ontem.',
    body: [
      'Crescer também significou desenvolver pessoas, processos e uma cultura própria. A evolução não aconteceria apenas pela quantidade de terrenos ou cidades atendidas, mas pela capacidade de aprender com cada etapa e buscar resultados melhores.',
    ],
    requiresInternalApproval: true,
  },
  {
    eyebrow: 'SETEMBRO DE 2025',
    title: 'A empresa tinha crescido. O nome precisava crescer com ela.',
    body: [
      'A marca Agiliza Loteamentos acompanhou o início de tudo, mas os horizontes tinham mudado. A empresa já não atuava apenas com loteamentos isolados: ela planejava territórios, organizava infraestrutura e construía valor a longo prazo.',
      'Em setembro de 2025, nasce a Vemari. Um nome que carrega a força do convite — Vem —, a determinação de realizar e a clareza de quem sabe onde quer chegar.',
    ],
    requiresInternalApproval: true,
  },
] as const;
