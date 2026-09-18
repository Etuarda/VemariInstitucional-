'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { routes } from '@/shared/lib/routes';
import styles from './site-header.module.css';

const NAVIGATION_ITEMS = [
  { href: routes.developments, label: 'Empreendimentos' },
  { href: routes.locations, label: 'Onde estamos' },
  { href: routes.about, label: 'Sobre' },
  { href: routes.brokers, label: 'Corretores' },
  { href: routes.contact, label: 'Contato' },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={routes.home} aria-label="Vemari — página inicial" onClick={closeMenu}>
          <Image
            src="/brand/vemari-logo-blue.png"
            alt="Vemari Empreendimentos"
            width={180}
            height={61}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.desktopNavLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href={routes.contact} className={styles.contactButton}>
          Fale com a Vemari →
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {/* Ícone padrão de 3 barras (hambúrguer) */}
          <svg
            className={styles.menuIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <span>Menu</span>
        </button>
      </div>

      {isMenuOpen ? (
        <div id="mobile-navigation" className={styles.mobileOverlay}>
          {/* Topo do Card Mobile em tela cheia */}
          <div className={styles.mobileCardHeader}>
            <Link href={routes.home} aria-label="Vemari — página inicial" onClick={closeMenu}>
              <Image
                src="/brand/vemari-logo-white.png"
                alt="Vemari Empreendimentos"
                width={150}
                height={51}
                className={styles.mobileLogo}
                priority
              />
            </Link>
            <button
              type="button"
              className={styles.mobileCloseButton}
              aria-label="Fechar menu"
              onClick={closeMenu}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>Fechar</span>
            </button>
          </div>

          <nav className={styles.mobileNav} aria-label="Navegação mobile">
            {NAVIGATION_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.mobileNavLabel}>{item.label}</span>
                <span className={styles.mobileNavArrow}>→</span>
              </Link>
            ))}
          </nav>

          <div className={styles.mobileCtaWrapper}>
            <Link
              href={routes.contact}
              onClick={closeMenu}
              className={styles.mobileContactButton}
            >
              Fale com a Vemari →
            </Link>
            <Link
              href={routes.sales}
              onClick={closeMenu}
              className={styles.mobileSalesButton}
            >
              Central de Vendas Geral →
            </Link>
            <p className={styles.mobileFooterInfo}>
              Vemari Empreendimentos · Valença do Piauí
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
