'use client';

import { useState } from 'react';
import Link from 'next/link';
import { routes } from '@/shared/lib/routes';
import { WhatsAppLink } from './whatsapp-link';
import type { Broker } from '../types/broker';
import styles from './broker-accordion-slider.module.css';

interface BrokerAccordionSliderProps {
  readonly items: readonly Broker[];
  readonly developmentName?: string;
}

export function BrokerAccordionSlider({ items, developmentName }: BrokerAccordionSliderProps) {
  // O primeiro corretor inicia expandido para apresentar o layout de forma rica e convidativa
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container} role="region" aria-label="Carrossel de corretores Vemari">
      <div className={styles.slider}>
        {items.map((broker, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={broker.id}
              className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setActiveIndex(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              aria-label={`Corretor ${broker.name}`}
            >
              {broker.photo ? (
                <img
                  src={broker.photo}
                  alt={`Retrato de ${broker.name}`}
                  className={styles.image}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              ) : null}

              <div className={styles.overlay} />

              {/* Rótulo visível na fatia comprimida no desktop */}
              {!isActive ? (
                <div className={styles.collapsedLabel} aria-hidden="true">
                  <span className={styles.collapsedText}>{broker.name}</span>
                </div>
              ) : null}

              {/* Conteúdo completo exibido quando a fatia está expandida */}
              <div className={styles.expandedContent}>
                <span className={styles.roleTag}>Especialista Vemari</span>
                <h3 className={styles.name}>{broker.name}</h3>
                <p className={styles.creci}>CRECI {broker.creci}</p>
                <p className={styles.region}>
                  {broker.city} — {broker.state}
                </p>

                {developmentName ? (
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <WhatsAppLink
                      brokerSlug={broker.slug}
                      developmentName={developmentName}
                      label={`Falar sobre ${developmentName} →`}
                      className={styles.actionButton}
                    />
                    <Link href={routes.broker(broker.slug)} className={styles.secondaryButton}>
                      Ver perfil →
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link href={routes.broker(broker.slug)} className={styles.actionButton}>
                      Ver Terrenos Disponíveis →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
