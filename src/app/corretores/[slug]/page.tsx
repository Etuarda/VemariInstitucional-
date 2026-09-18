import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { WhatsAppLink } from '@/features/brokers/components/whatsapp-link';
import { brokers, getActiveBrokerBySlug } from '@/features/brokers/data/brokers';
import { DevelopmentMarquee } from '@/features/developments/components/development-marquee';
import { developments } from '@/features/developments/data/developments';
import { MediaPlaceholder } from '@/shared/components/ui/media-placeholder';
import { routes } from '@/shared/lib/routes';
import { getAssetPath } from '@/shared/lib/assets';

interface BrokerPageProps {
  readonly params: Promise<{ slug: string }>;
}

const BROKER_ASSISTANCE_STEPS = [
  'Conhecer os empreendimentos',
  'Encontrar terrenos',
  'Entender condições',
  'Agendar uma visita',
] as const;

export function generateStaticParams() {
  return brokers.map(({ slug }) => ({ slug }));
}

export default async function BrokerPage({ params }: BrokerPageProps) {
  const { slug } = await params;
  if (slug === 'vendas-geral' || slug === 'vemari-central') {
    redirect(routes.sales);
  }

  const broker = getActiveBrokerBySlug(slug);
  if (!broker) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <section className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
        {broker.photo ? (
          <img
            src={getAssetPath(broker.photo)}
            alt={`Retrato de ${broker.name}`}
            className="aspect-[3/4] w-full object-cover lg:col-span-5"
            fetchPriority="high"
          />
        ) : (
          <MediaPlaceholder
            label="Retrato profissional do corretor"
            className="aspect-[3/4] lg:col-span-5"
          />
        )}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">
            Corretor Vemari
          </p>
          <h1 className="mt-4 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            {broker.name}
          </h1>
          <p className="mt-3 sm:mt-4 font-mono text-xs uppercase tracking-widest text-stone-500">
            CRECI {broker.creci} · {broker.city} — {broker.state}
          </p>
          <p className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-stone-600">
            Uma boa escolha começa com informação clara sobre o lugar onde você pretende investir.
            Atendo e apresento todos os terrenos e empreendimentos da Vemari.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <WhatsAppLink
              brokerSlug={broker.slug}
              label={`Falar com ${broker.firstName} →`}
              className="w-full sm:w-auto text-center bg-stone-950 px-6 py-4 font-mono text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            />
            <Link
              href={routes.sales}
              className="w-full sm:w-auto text-center border border-stone-400 px-6 py-4 font-mono text-xs uppercase tracking-widest text-stone-900 transition-colors hover:border-stone-950"
            >
              Acessar Página do Comercial →
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20 md:mt-24 border-t border-stone-300 pt-8 sm:pt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
          Como posso ajudar
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
          Escolher um terreno é uma decisão importante. Você não precisa fazer isso sozinho.
        </h2>
        <div className="mt-8 sm:mt-10 grid border-y border-stone-300 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {BROKER_ASSISTANCE_STEPS.map((item, index) => (
            <div
              key={item}
              className="border-b border-stone-300 py-6 sm:py-7 md:border-b-0 md:border-r md:px-5 last:border-b-0 last:md:border-r-0"
            >
              <span className="font-mono text-xs text-stone-400">0{index + 1}</span>
              <p className="mt-3 sm:mt-4 font-serif text-lg sm:text-xl">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Carrossel Contínuo com Todos os Terrenos */}
      <section className="mt-16 sm:mt-20 border-t border-stone-300 pt-8 sm:pt-12 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Todos os Terrenos
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
              Empreendimentos que posso apresentar a você.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-stone-600">
              Como especialista da Vemari, atendo e apresento todos os terrenos e bairros planejados da empresa. Explore as opções no carrossel contínuo abaixo ou fale diretamente com a equipe comercial.
            </p>
          </div>

          <Link
            href={routes.sales}
            className="self-start md:self-auto inline-flex items-center justify-center border border-vemari-navy bg-vemari-navy px-6 py-4 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-vemari-ink whitespace-nowrap"
          >
            Acessar Página do Comercial →
          </Link>
        </div>

        <div className="-mx-4 sm:-mx-6">
          <DevelopmentMarquee items={developments} />
        </div>
      </section>

      <section className="mt-16 sm:mt-20 grid gap-8 sm:gap-10 border-t border-stone-300 pt-8 sm:pt-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Conhecimento local
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">Conhecer o território faz diferença.</h2>
          <p className="mt-4 sm:mt-5 text-stone-600 leading-relaxed">
            A experiência local ajuda a entender o momento de cada projeto e a escolher com mais
            segurança.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Quem vai acompanhar você
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">{broker.name}</h2>
          <p className="mt-4 sm:mt-5 text-stone-600 leading-relaxed">{broker.shortBio}</p>
        </div>
      </section>

      <section className="mt-16 sm:mt-24 bg-stone-950 px-6 py-12 text-white md:px-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400">Próximo passo</p>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl sm:text-4xl md:text-5xl">
          Vamos encontrar seu próximo terreno?
        </h2>
        <p className="mt-4 sm:mt-5 text-stone-300">
          Receba informações sobre todos os empreendimentos e encontre o próximo passo para o seu projeto.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
          <WhatsAppLink
            brokerSlug={broker.slug}
            label={`Falar com ${broker.firstName} pelo WhatsApp →`}
            className="w-full sm:w-auto text-center border border-white px-6 py-4 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-white hover:text-stone-950"
          />
          <Link
            href={routes.sales}
            className="w-full sm:w-auto text-center border border-stone-500 text-stone-300 px-6 py-4 font-mono text-xs uppercase tracking-widest transition-colors hover:border-white hover:text-white"
          >
            Acessar Página do Comercial →
          </Link>
        </div>
      </section>
    </div>
  );
}
