import Link from 'next/link';
import { companyLocations } from '@/content/institutional';
import { DevelopmentColorField } from '@/features/developments/components/development-color-field';
import { routes } from '@/shared/lib/routes';

export const metadata = { title: 'Onde estamos' };

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Território Vemari</p>
      <h1 className="mt-4 sm:mt-5 max-w-5xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.05]">
        Cada território acrescenta um novo capítulo à nossa história.
      </h1>
      <p className="mt-5 sm:mt-7 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-stone-600">
        Conheça as regiões e municípios onde a Vemari desenvolve projetos e amplia oportunidades de
        crescimento urbano.
      </p>

      <div className="mt-8 sm:mt-14">
        <DevelopmentColorField
          name="Piauí & Maranhão"
          city="Expansão Regional"
          state="Nordeste"
          variant="editorial"
          showDetails={true}
        />
        <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-500">
          Territórios em expansão
        </p>
      </div>

      <section className="mt-14 sm:mt-20 border-t border-stone-300 pt-8 sm:pt-12">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Onde a Vemari está presente.</h2>
        <div className="mt-8 sm:mt-10 grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2">
          {companyLocations.map(({ location, description }) => (
            <article key={location} className="border-t border-stone-300 pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-stone-500">Território</p>
              <h3 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-3xl">{location}</h3>
              <p className="mt-3 sm:mt-4 text-sm leading-6 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
        <Link
          href={routes.developments}
          className="mt-8 sm:mt-10 inline-block font-mono text-xs uppercase underline underline-offset-8 text-vemari-navy hover:text-vemari-gold"
        >
          Ver empreendimentos →
        </Link>
      </section>
    </div>
  );
}
