import Link from 'next/link';
import Image from 'next/image';
import { BrokerAccordionSlider } from '@/features/brokers/components/broker-accordion-slider';
import { brokers } from '@/features/brokers/data/brokers';
import { DevelopmentMarquee } from '@/features/developments/components/development-marquee';
import { developments } from '@/features/developments/data/developments';
import { SectionHeading } from '@/shared/components/ui/section-heading';
import { routes } from '@/shared/lib/routes';

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
          <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] overflow-hidden bg-vemari-blue lg:col-span-5">
            <div className="absolute inset-x-8 top-8 h-32 border border-vemari-navy/15 bg-vemari-ivory" />
            <div className="absolute bottom-0 right-0 h-3/5 w-3/4 bg-vemari-navy" />
            <div className="absolute bottom-12 left-10 h-28 w-28 bg-vemari-gold" />
            <Image
              src="/brand/vemari-logo-blue.png"
              alt="Vemari Empreendimentos"
              width={420}
              height={142}
              className="absolute left-6 top-12 sm:left-10 sm:top-16 h-auto w-[75%] sm:w-[72%]"
              priority
            />
            <p className="absolute bottom-8 right-6 sm:bottom-12 sm:right-10 max-w-44 sm:max-w-48 text-right font-serif text-xl sm:text-2xl leading-tight text-white">
              Vem. Acredite. Realize o impossível.
            </p>
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
