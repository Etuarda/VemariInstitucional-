import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BrokerAccordionSlider } from '@/features/brokers/components/broker-accordion-slider';
import { WhatsAppLink } from '@/features/brokers/components/whatsapp-link';
import { getBrokersBySlugs } from '@/features/brokers/data/brokers';
import { DevelopmentColorField } from '@/features/developments/components/development-color-field';
import { DevelopmentFact } from '@/features/developments/components/development-fact';
import { formatDevelopmentStatus } from '@/features/developments/constants/development-status';
import { developments, getDevelopmentBySlug } from '@/features/developments/data/developments';
import { formatAreaRange } from '@/features/developments/utils/format-area';
import { routes } from '@/shared/lib/routes';

interface DevelopmentPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return developments.map(({ slug }) => ({ slug }));
}

export default async function DevelopmentPage({ params }: DevelopmentPageProps) {
  const { slug } = await params;
  const development = getDevelopmentBySlug(slug);
  if (!development) notFound();

  const area = formatAreaRange(development.areaMin, development.areaMax);
  const relatedBrokers = getBrokersBySlugs(development.brokerSlugs);
  const statusText =
    development.commercialStatus ?? formatDevelopmentStatus(development.status);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">
        {development.city} — {development.state}
      </p>
      <h1 className="mt-4 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
        {development.name}
      </h1>
      <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-stone-600">
        {development.tagline}
      </p>
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <WhatsAppLink
          developmentName={development.name}
          label="Falar sobre este empreendimento →"
          className="w-full sm:w-auto text-center bg-stone-950 px-6 py-4 font-mono text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90"
        />
        <Link
          href={routes.sales}
          className="w-full sm:w-auto text-center border border-stone-400 px-6 py-4 font-mono text-xs uppercase tracking-widest text-stone-900 transition-colors hover:border-stone-950"
        >
          Acessar Página do Comercial →
        </Link>
      </div>

      <DevelopmentColorField
        name={development.name}
        city={development.city}
        state={development.state}
        status={statusText}
        slug={development.slug}
        variant="hero"
        className="mt-8 sm:mt-14"
      />

      <dl className="mt-8 sm:mt-12 grid border-y border-stone-300 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <DevelopmentFact label="Status" value={statusText} />
        {area ? <DevelopmentFact label="Área dos lotes" value={area} /> : null}
        {development.totalLots ? (
          <DevelopmentFact label="Total de lotes" value={String(development.totalLots)} />
        ) : null}
        {development.region ? <DevelopmentFact label="Região" value={development.region} /> : null}
        {development.type ? <DevelopmentFact label="Tipo" value={development.type} /> : null}
        {development.launchDate ? (
          <DevelopmentFact label="Lançamento" value={development.launchDate} />
        ) : null}
        <DevelopmentFact
          label="Localização"
          value={`${development.city} — ${development.state}`}
        />
      </dl>

      {development.salesHighlight ? (
        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-vemari-gold">
          {development.salesHighlight}
        </p>
      ) : null}

      <section className="mt-14 sm:mt-20 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
          O empreendimento
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
          Um novo endereço para viver ou investir.
        </h2>
        <p className="mt-4 sm:mt-5 text-base leading-7 sm:leading-8 text-stone-600">
          {development.description}
        </p>
      </section>

      <section className="mt-14 sm:mt-20 border-t border-stone-300 pt-8 sm:pt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
          Infraestrutura urbana
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
          Planejado para sustentar o desenvolvimento do território.
        </h2>
        <ol className="mt-8 sm:mt-10 grid gap-0 grid-cols-1 md:grid-cols-2">
          {development.infrastructure.map((item, index) => (
            <li key={item} className="grid grid-cols-[48px_1fr] border-t border-stone-300 py-5 sm:py-6">
              <span className="font-mono text-xs text-stone-400">0{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Seção de Atendimento: Carrossel de Corretores + Acesso ao Comercial Geral */}
      <section className="mt-14 sm:mt-20 border-t border-stone-300 pt-8 sm:pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Atendimento Especializado & Comercial
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
              Fale com quem conhece este empreendimento.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-stone-600">
              Todos os corretores Vemari comercializam {development.name} e todos os terrenos da empresa. Escolha um corretor no carrossel abaixo ou acesse diretamente a nossa página comercial.
            </p>
          </div>

          <Link
            href={routes.sales}
            className="self-start md:self-auto inline-flex items-center justify-center border border-vemari-navy bg-vemari-navy px-6 py-4 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-vemari-ink whitespace-nowrap"
          >
            Acessar Página do Comercial →
          </Link>
        </div>

        <div className="mt-6 sm:mt-8">
          <BrokerAccordionSlider items={relatedBrokers} developmentName={development.name} />
        </div>
      </section>
    </div>
  );
}
