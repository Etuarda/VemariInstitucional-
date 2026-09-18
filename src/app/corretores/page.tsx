import Link from 'next/link';
import { BrokerDirectory } from '@/features/brokers/components/broker-directory';
import { brokers } from '@/features/brokers/data/brokers';
import { DevelopmentMarquee } from '@/features/developments/components/development-marquee';
import { developments } from '@/features/developments/data/developments';
import { routes } from '@/shared/lib/routes';

export const metadata = { title: 'Corretores' };

export default function BrokersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">
            Especialistas Vemari
          </p>
          <h1 className="mt-4 sm:mt-5 max-w-5xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.05]">
            Encontre quem conhece o empreendimento e pode acompanhar sua escolha.
          </h1>
          <p className="mt-5 sm:mt-7 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-stone-600">
            Todos os corretores Vemari vendem todos os terrenos da empresa. Escolha um especialista para tirar dúvidas, entender condições ou acesse diretamente a nossa página comercial geral.
          </p>
        </div>

        <Link
          href={routes.sales}
          className="self-start md:self-auto inline-flex items-center justify-center border border-vemari-navy bg-vemari-navy px-6 py-4 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-vemari-ink whitespace-nowrap"
        >
          Acessar Página do Comercial →
        </Link>
      </div>

      <div className="mt-8 sm:mt-12">
        <BrokerDirectory items={brokers} />
      </div>

      {/* Carrossel Contínuo com Todos os Terrenos */}
      <section className="mt-16 sm:mt-24 border-t border-stone-300 pt-12 sm:pt-16 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Todos os Terrenos
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
              Nossos corretores atendem todos os territórios.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-stone-600">
              Todos os corretores comercializam todos os empreendimentos da Vemari. Confira a esteira contínua com os projetos disponíveis.
            </p>
          </div>
          <Link
            href={routes.developments}
            className="font-mono text-xs uppercase underline underline-offset-8 text-vemari-navy hover:text-vemari-gold whitespace-nowrap"
          >
            Ver todos os empreendimentos →
          </Link>
        </div>

        <div className="-mx-4 sm:-mx-6">
          <DevelopmentMarquee items={developments} />
        </div>
      </section>
    </div>
  );
}
