import Link from 'next/link';
import Image from 'next/image';
import { BrokerAccordionSlider } from '@/features/brokers/components/broker-accordion-slider';
import { brokers } from '@/features/brokers/data/brokers';
import { DevelopmentMarquee } from '@/features/developments/components/development-marquee';
import { developments } from '@/features/developments/data/developments';
import { SectionHeading } from '@/shared/components/ui/section-heading';
import { routes } from '@/shared/lib/routes';
import { getAssetPath } from '@/shared/lib/assets';

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-vemari-navy/15 py-12 sm:py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-vemari-gold">
              Vemari Empreendimentos
            </p>
            <h1 className="mt-4 sm:mt-5 max-w-4xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.03] text-vemari-navy">
              Vem, acredite, realize o impossível!
            </h1>
            <p className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-vemari-navy/70">
              Territórios não se transformam apenas com projetos. Eles se transformam quando
              planejamento encontra execução, quando o combinado é cumprido e quando cada novo passo
              é construído com responsabilidade.
            </p>
            <div className="mt-8 sm:mt-9 flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <Link
                href={routes.developments}
                className="w-full sm:w-auto border border-vemari-navy bg-vemari-navy px-6 py-4 text-center font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-vemari-ink"
              >
                Conheça nossos empreendimentos →
              </Link>
              <Link
                href={routes.about}
                className="w-full sm:w-auto border border-vemari-navy/35 px-6 py-4 text-center font-mono text-xs uppercase tracking-widest text-vemari-navy transition-colors hover:border-vemari-gold hover:text-vemari-gold"
              >
                Conheça nossa história →
              </Link>
            </div>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden rounded-lg bg-vemari-navy lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border border-vemari-navy/20 shadow-sm">
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-vemari-blue/30 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-vemari-gold/20 blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <Image
                src={getAssetPath('/brand/vemari-logo-white.png')}
                alt="Vemari Empreendimentos"
                width={360}
                height={122}
                className="h-auto w-48 sm:w-60"
                priority
              />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-vemari-gold">
                Territórios &amp; Planejamento Urbano
              </p>
            </div>
            <div className="relative z-10 mt-8 border-t border-white/15 pt-5">
              <p className="font-serif text-xl sm:text-2xl leading-snug text-white">
                Vem. Acredite. Realize o impossível.
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/60">
                Piauí &amp; Maranhão
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Empreendimentos: Carrossel em Esteira Infinita (Infinite Marquee) */}
      <section className="border-b border-stone-200 bg-stone-50 py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Empreendimentos"
            title="Territórios em desenvolvimento."
            description="Conheça projetos planejados para acompanhar o crescimento das cidades e abrir espaço para novas histórias."
          />
          <Link
            href={routes.developments}
            className="font-mono text-xs uppercase underline underline-offset-8 whitespace-nowrap text-vemari-navy hover:text-vemari-gold transition-colors self-start md:self-auto"
          >
            Ver todos os empreendimentos →
          </Link>
        </div>
        <DevelopmentMarquee items={developments} />
      </section>

      <section className="bg-vemari-navy py-16 sm:py-20 md:py-28 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-vemari-blue">
            Nossa forma de construir
          </p>
          <h2 className="mt-4 sm:mt-5 max-w-4xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-none">
            Vem, acredite, realize o impossível.
          </h2>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/70">
            Acreditar no impossível significa enfrentar desafios com responsabilidade, organização,
            coragem e disposição para encontrar um caminho.
          </p>
          <Link
            href={routes.about}
            className="mt-8 sm:mt-9 inline-block w-full sm:w-auto text-center border border-white/35 px-6 py-4 font-mono text-xs uppercase tracking-widest transition-colors hover:border-vemari-gold hover:text-vemari-gold"
          >
            Conheça nossa história →
          </Link>
        </div>
      </section>

      {/* Seção de Corretores: Carrossel Expansível (Accordion Slider) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <SectionHeading
            eyebrow="Especialistas Vemari"
            title="Encontre quem pode acompanhar sua escolha."
            description="Toque ou passe o mouse nos especialistas para conhecer a equipe e ver os terrenos disponíveis sob sua responsabilidade."
          />
          <Link
            href={routes.brokers}
            className="font-mono text-xs uppercase underline underline-offset-8 whitespace-nowrap text-vemari-navy hover:text-vemari-gold transition-colors self-start md:self-auto"
          >
            Ver todos os corretores →
          </Link>
        </div>
        <BrokerAccordionSlider items={brokers} />
      </section>
    </>
  );
}
