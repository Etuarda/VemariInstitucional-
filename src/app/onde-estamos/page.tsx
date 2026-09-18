import Link from 'next/link';
import { companyLocations } from '@/content/institutional';
import { DevelopmentCard } from '@/features/developments/components/development-card';
import { DevelopmentMarquee } from '@/features/developments/components/development-marquee';
import { getAllDevelopments, getDevelopmentsBySlugs } from '@/features/developments/data/developments';
import { routes } from '@/shared/lib/routes';

export const metadata = {
  title: 'Onde Estamos | Cidades e Empreendimentos Vemari',
  description:
    'Conheça todas as cidades e empreendimentos da Vemari no Piauí e Maranhão: Valença do Piauí, Pio IX, Inhuma, Barreirinhas e Mata Roma.',
};

export default function LocationsPage() {
  const allDevelopments = getAllDevelopments();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Hero institucional */}
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-vemari-gold">
          Território &amp; Presença Regional
        </p>
        <h1 className="mt-4 sm:mt-5 max-w-5xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.05] text-vemari-navy">
          Todas as cidades e empreendimentos Vemari.
        </h1>
        <p className="mt-5 sm:mt-7 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-vemari-navy/75">
          A Vemari desenvolve territórios planejados em municípios estratégicos do Piauí e do Maranhão.
          Conheça abaixo cada cidade onde estamos presentes e os respectivos empreendimentos prontos,
          em obras ou em fase de lançamento.
        </p>

        {/* Indicadores de presença territorial */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 border-y border-stone-200 py-6">
          <div>
            <span className="font-serif text-3xl sm:text-4xl text-vemari-navy">5</span>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-stone-500">
              Cidades Atendidas
            </p>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl text-vemari-navy">
              {allDevelopments.length}
            </span>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-stone-500">
              Empreendimentos
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="font-serif text-3xl sm:text-4xl text-vemari-navy">2</span>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-stone-500">
              Estados (PI e MA)
            </p>
          </div>
        </div>

        {/* Atalhos rápidos para navegar pelas cidades */}
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Navegação rápida por cidades">
          <span className="font-mono text-xs uppercase tracking-wider text-stone-500 mr-1">
            Ir para cidade:
          </span>
          {companyLocations.map((loc) => (
            <a
              key={loc.id}
              href={`#${loc.id}`}
              className="inline-block rounded border border-stone-300 bg-white px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-vemari-navy transition-colors hover:border-vemari-navy hover:bg-stone-50"
            >
              {loc.city} ({loc.state})
            </a>
          ))}
        </div>
      </section>

      {/* Cidades e seus respectivos empreendimentos */}
      <section className="mt-14 sm:mt-20 space-y-16 sm:space-y-24">
        {companyLocations.map((loc) => {
          const cityDevelopments = getDevelopmentsBySlugs(loc.developmentSlugs);

          return (
            <article
              key={loc.id}
              id={loc.id}
              className="scroll-mt-24 border-t-2 border-stone-200 pt-8 sm:pt-12"
            >
              {/* Cabeçalho da Cidade */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block bg-vemari-navy text-white text-[11px] font-mono uppercase tracking-widest px-2.5 py-1">
                      {loc.state} · {loc.region}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      {loc.isOperationalBase
                        ? 'Base Operacional'
                        : `${cityDevelopments.length} ${cityDevelopments.length === 1 ? 'Empreendimento' : 'Empreendimentos'}`}
                    </span>
                  </div>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-vemari-navy">
                    {loc.location}
                  </h2>
                  <p className="mt-2 text-base font-medium text-stone-800">{loc.tagline}</p>
                </div>
                <Link
                  href={routes.developments}
                  className="font-mono text-xs uppercase underline underline-offset-8 text-vemari-navy hover:text-vemari-gold shrink-0 self-start md:self-auto"
                >
                  Ver no catálogo geral →
                </Link>
              </div>

              <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-stone-600">
                {loc.description}
              </p>

              {/* Empreendimentos da Cidade */}
              {cityDevelopments.length > 0 ? (
                <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {cityDevelopments.map((development) => (
                    <DevelopmentCard key={development.id} development={development} />
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-vemari-gold">
                    Presença Corporativa
                  </p>
                  <h3 className="mt-2 font-serif text-xl sm:text-2xl text-vemari-navy">
                    Operação e Novos Projetos em Mata Roma
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    A Vemari mantém operação empresarial estruturada na região desde 2025. O estudo
                    e planejamento de futuros empreendimentos imobiliários no município estão em
                    andamento.
                  </p>
                  <div className="mt-4">
                    <Link
                      href={routes.contact}
                      className="font-mono text-xs uppercase underline underline-offset-8 text-vemari-navy hover:text-vemari-gold"
                    >
                      Fale com nossa equipe institucional →
                    </Link>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* Esteira contínua com todos os empreendimentos */}
      <section className="mt-20 sm:mt-28 border-t border-stone-300 pt-12 sm:pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-vemari-gold">
              Portfólio Completo
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-vemari-navy">
              Esteira de todos os empreendimentos
            </h2>
          </div>
          <Link
            href={routes.developments}
            className="font-mono text-xs uppercase underline underline-offset-8 text-vemari-navy hover:text-vemari-gold"
          >
            Acessar página de empreendimentos →
          </Link>
        </div>

        <DevelopmentMarquee items={allDevelopments} />
      </section>

      {/* Chamada para atendimento / corretores */}
      <section className="mt-16 sm:mt-24 rounded-lg bg-vemari-navy p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-vemari-gold">
            Atendimento Especializado
          </p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-white">
            Deseja atendimento em alguma dessas cidades?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/75 max-w-xl">
            Nossa equipe de corretores credenciados está pronta para apresentar lotes, tirar dúvidas e
            agendar visitas presenciais em qualquer um dos nossos empreendimentos.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href={routes.brokers}
            className="border border-white bg-white px-6 py-3.5 text-center font-mono text-xs uppercase tracking-widest text-vemari-navy transition-colors hover:bg-stone-100"
          >
            Ver Corretores →
          </Link>
          <Link
            href={routes.contact}
            className="border border-white/40 px-6 py-3.5 text-center font-mono text-xs uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Falar com a Vemari →
          </Link>
        </div>
      </section>
    </div>
  );
}
