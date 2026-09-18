import { DevelopmentDirectory } from '@/features/developments/components/development-directory';
import { developments } from '@/features/developments/data/developments';

export const metadata = { title: 'Empreendimentos' };

export default function DevelopmentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Empreendimentos Vemari</p>
      <h1 className="mt-4 sm:mt-5 max-w-5xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.05]">
        Encontre o terreno que faz sentido para o seu próximo passo.
      </h1>
      <p className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-stone-600">
        Explore os empreendimentos Vemari, conheça diferentes localizações e encontre informações para comparar suas opções com mais clareza.
      </p>
      <div className="mt-8 sm:mt-12"><DevelopmentDirectory items={developments} /></div>
    </div>
  );
}
