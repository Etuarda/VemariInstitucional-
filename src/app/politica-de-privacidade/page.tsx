import { legalContent } from '@/content/legal';
import { LegalPageShell } from '@/features/legal/components/legal-page-shell';

export const metadata = { title: 'Política de Privacidade' };

export default function PrivacyPage() {
  const { title, intro, sectionTitle, sectionBody } = legalContent.privacy;

  return (
    <LegalPageShell title={title}>
      <p>{intro}</p>
      <h2 className="font-serif text-2xl text-stone-950">{sectionTitle}</h2>
      <p>{sectionBody}</p>
    </LegalPageShell>
  );
}
