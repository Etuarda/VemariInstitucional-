import Link from 'next/link';
import { aboutStory, institutionalContent } from '@/content/institutional';
import { DevelopmentColorField } from '@/features/developments/components/development-color-field';
import { routes } from '@/shared/lib/routes';

export const metadata = { title: 'Sobre a Vemari' };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Nossa história</p>
      <h1 className="mt-4 sm:mt-5 max-w-4xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.05]">
        {institutionalContent.annualTheme}
      </h1>
      <p className="mt-5 sm:mt-7 max-w-3xl text-base sm:text-xl leading-7 sm:leading-9 text-stone-600">
        Nossa história começou em 2017, em Valença do Piauí, com uma ideia, um território e a decisão
        de fazer acontecer.
      </p>

      <div className="mt-8 sm:mt-14">
        <DevelopmentColorField
          name="Vemari Empreendimentos"
          city="Valença do Piauí"
          state="PI"
          variant="editorial"
          showDetails={true}
        />
        <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-500">
          Territórios para novas histórias
        </p>
      </div>

      <div className="mt-16 sm:mt-24 space-y-14 sm:space-y-20">
        {aboutStory.map((chapter) => (
          <article
            key={chapter.title}
            className="grid gap-4 sm:gap-8 border-t border-stone-300 pt-8 sm:pt-10 grid-cols-1 md:grid-cols-[220px_1fr]"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
              {chapter.eyebrow}
            </p>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl">{chapter.title}</h2>
              <div className="mt-4 sm:mt-6 max-w-3xl space-y-4 text-base leading-7 sm:leading-8 text-stone-600">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 sm:mt-24 border-t border-stone-300 pt-8 sm:pt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-500">O próximo capítulo</p>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl sm:text-4xl md:text-5xl">
          Toda grande história de território termina começando outra.
        </h2>
        <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-stone-600">
          A nossa continua. A próxima pode começar com a escolha do lugar onde você vai construir,
          investir ou viver.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href={routes.developments}
            className="w-full sm:w-auto text-center bg-stone-950 px-6 py-4 font-mono text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          >
            Conheça os empreendimentos →
          </Link>
          <Link
            href={routes.brokers}
            className="w-full sm:w-auto text-center border border-stone-400 px-6 py-4 font-mono text-xs uppercase tracking-widest transition-colors hover:border-stone-950"
          >
            Encontre um corretor →
          </Link>
        </div>
      </section>
    </div>
  );
}
