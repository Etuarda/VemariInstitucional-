import { legalContent } from '@/content/legal';
import { LegalPageShell } from '@/features/legal/components/legal-page-shell';

export const metadata = { title: 'Política de Cookies' };

export default function CookiesPage() {
  const { title, paragraphs, sectionTitle, sectionBody, closing } = legalContent.cookies;

  return (
    <LegalPageShell title={title}>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <h2 className="font-serif text-2xl text-stone-950">{sectionTitle}</h2>
      <p>{sectionBody}</p>
      <p>{closing}</p>
    </LegalPageShell>
  );
}
