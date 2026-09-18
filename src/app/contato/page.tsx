import Image from 'next/image';
import { ContactForm } from '@/features/contact/components/contact-form';
import { getAssetPath } from '@/shared/lib/assets';

export const metadata = { title: 'Contato' };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-vemari-gold">Fale com a Vemari</p>
          <h1 className="mt-4 sm:mt-5 max-w-4xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.05] text-vemari-navy">
            Estamos prontos para conversar com você.
          </h1>
          <p className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-vemari-navy/70">
            Conte o que você procura e direcionamos seu contato para o atendimento adequado.
          </p>
        </div>
        <aside className="bg-vemari-blue p-6 sm:p-8">
          <Image src={getAssetPath('/brand/vemari-qr-code.png')} alt="QR Code de contato da Vemari" width={220} height={275} className="mx-auto h-36 w-36 sm:h-44 sm:w-44 object-contain" />
          <p className="mt-4 sm:mt-5 text-center font-mono text-[11px] uppercase tracking-widest text-vemari-navy">Aponte a câmera e fale com a Vemari</p>
        </aside>
      </div>
      <div className="mt-10 sm:mt-14"><ContactForm /></div>
    </div>
  );
}
