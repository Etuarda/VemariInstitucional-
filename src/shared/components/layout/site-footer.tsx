import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/shared/lib/routes';
import styles from './site-footer.module.css';

const FOOTER_GROUPS = [
  {
    title: 'Quero comprar',
    links: [
      { href: routes.developments, label: 'Empreendimentos' },
      { href: routes.locations, label: 'Onde estamos' },
      { href: routes.brokers, label: 'Encontre um corretor' },
    ],
  },
  {
    title: 'A Vemari',
    links: [
      { href: routes.about, label: 'Sobre a Vemari' },
      { href: routes.about, label: 'Nossa história' },
      { href: routes.contact, label: 'Contato' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { href: 'https://wa.me/558999990000', label: 'WhatsApp' },
      { href: 'https://instagram.com', label: 'Instagram' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: routes.privacy, label: 'Política de Privacidade' },
      { href: routes.cookies, label: 'Política de Cookies' },
      { href: routes.terms, label: 'Termos de Uso' },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentGrid}>
        <div className={styles.brandCol}>
          <Image
            src="/brand/vemari-logo-white.png"
            alt="Vemari Empreendimentos"
            width={210}
            height={71}
            className={styles.brandLogo}
          />
          <p className={styles.brandTagline}>Vem. Acredite. Realize o impossível.</p>
          <p className={styles.brandText}>
            A Vemari acredita que grandes transformações são construídas todos os dias: no
            compromisso, na coragem de evoluir e na organização para executar.
          </p>
        </div>

        {FOOTER_GROUPS.map((group) => (
          <div key={group.title}>
            <h2 className={styles.groupTitle}>{group.title}</h2>
            <ul className={styles.groupLinks}>
              {group.links.map(({ href, label }) => (
                <li key={`${href}-${label}`}>
                  <Link href={href} className={styles.groupLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottomBar}>
        <p>VEMARI EMPREENDIMENTOS — Valença do Piauí — PI</p>
        <p>© 2026 Vemari Empreendimentos.</p>
      </div>
    </footer>
  );
}
