import Link from 'next/link';
import { DevelopmentFact } from '@/features/developments/components/development-fact';
import { getDevelopmentBySlug } from '@/features/developments/data/developments';
import { routes } from '@/shared/lib/routes';

export const metadata = { title: 'Barreirinhas' };

export default function BarreirinhasLaunchPage() {
  const development = getDevelopmentBySlug('barreirinhas-ma');

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-vemari-gold">
        Próximo território Vemari
      </p>
      <h1 className="mt-4 sm:mt-5 max-w-4xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.05]">
        Barreirinhas — MA
      </h1>
      <p className="mt-5 sm:mt-7 max-w-3xl text-base sm:text-xl leading-7 sm:leading-9 text-stone-600">
        Um novo capítulo está sendo preparado no Maranhão.
      </p>
      <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-0 border-y border-stone-300">
        <DevelopmentFact label="Cidade" value="Barreirinhas — MA" />
        <DevelopmentFact
          label="Estágio"
          value={development?.commercialStatus ?? 'Pré-lançamento'}
        />
        <DevelopmentFact label="Previsão" value="2026" />
        <DevelopmentFact label="Nome" value="[A DEFINIR]" />
      </div>
      <p className="mt-8 sm:mt-12 max-w-2xl text-base leading-7 sm:leading-8 text-stone-600">
        A Vemari prepara um novo lançamento em Barreirinhas ainda em 2026. Cadastre seu interesse
        para receber as primeiras informações oficiais assim que forem apresentadas.
      </p>
      <Link
        href={routes.contact}
        className="mt-6 sm:mt-8 inline-block w-full sm:w-auto text-center bg-stone-950 px-6 py-4 font-mono text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90"
      >
        Quero receber novidades →
      </Link>
    </div>
  );
}
