import Image from 'next/image';
import { WhatsAppLink } from '@/features/brokers/components/whatsapp-link';
import { DevelopmentCard } from '@/features/developments/components/development-card';
import { developments } from '@/features/developments/data/developments';
import { getAssetPath } from '@/shared/lib/assets';
import styles from './vendas.module.css';

export const metadata = {
  title: 'Vendas Geral | Vemari Empreendimentos',
  description:
    'Central de Vendas oficial e atendimento direto da Vemari Empreendimentos. Conheça loteamentos, consulte disponibilidades e negocie direto com a incorporadora.',
};

const SALES_ASSISTANCE_STEPS = [
  'Conhecer todos os empreendimentos',
  'Consultar lotes e disponibilidades',
  'Entender condições de pagamento',
  'Agendar visita ou atendimento direto',
] as const;

export default function SalesPage() {
  return (
    <div className={styles.container}>
      {/* Hero: Central de Vendas Oficial */}
      <section className={styles.heroGrid}>
        <div className={styles.visualWrapper}>
          <span className={styles.visualBadge}>Canal Direto da Incorporadora</span>
          <div className={styles.visualCenter}>
            <Image
              src={getAssetPath('/brand/vemari-logo-white.png')}
              alt="Vemari Empreendimentos"
              width={300}
              height={100}
              className={styles.visualLogo}
              priority
            />
            <p className={styles.visualTagline}>Central de Atendimento & Vendas</p>
          </div>
          <div className={styles.visualFooter}>
            <span>CRECI PJ 584</span>
            <span>Piauí & Maranhão</span>
          </div>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Central de Atendimento Vemari</p>
          <h1 className={styles.heroTitle}>Vendas Geral</h1>
          <p className={styles.heroMeta}>
            Atendimento Corporativo · CRECI PJ 584 · Valença, Pio IX, Inhuma e Barreirinhas
          </p>
          <p className={styles.heroDescription}>
            Uma boa escolha começa com informação clara sobre o lugar onde você pretende investir.
            Na Central de Vendas Vemari, você tem acesso direto a todos os loteamentos,
            disponibilidades em tempo real e condições comerciais aprovadas pela incorporadora.
          </p>
          <WhatsAppLink
            brokerSlug="vendas-geral"
            label="Falar com a Central de Vendas →"
            className={styles.heroButton}
          />
        </div>
      </section>

      {/* Como podemos ajudar */}
      <section className={styles.sectionDivider}>
        <p className={styles.sectionEyebrow}>Como podemos ajudar</p>
        <h2 className={styles.sectionTitle}>
          Escolher um terreno é uma decisão importante. Nós acompanhamos você em todas as etapas.
        </h2>
        <div className={styles.stepsGrid}>
          {SALES_ASSISTANCE_STEPS.map((item, index) => (
            <div key={item} className={styles.stepItem}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <p className={styles.stepLabel}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfólio de Empreendimentos */}
      <section className={styles.sectionDivider}>
        <p className={styles.sectionEyebrow}>Portfólio de Territórios</p>
        <h2 className={styles.sectionTitle}>Empreendimentos disponíveis para você conhecer e adquirir.</h2>
        <div className={styles.developmentsGrid}>
          {developments.map((development) => (
            <DevelopmentCard key={development.id} development={development} />
          ))}
        </div>
      </section>

      {/* Diferenciais e Atendimento */}
      <section className={styles.twoColumnGrid}>
        <div>
          <p className={styles.sectionEyebrow}>Negociação Direta</p>
          <h2 className={styles.sectionTitle}>Segurança jurídica e agilidade.</h2>
          <p className={styles.columnBody}>
            Ao falar com a equipe de Vendas Geral, você conta com atendimento transparente, respaldo
            jurídico completo, simulação precisa de financiamento direto e agilidade na formalização do seu contrato.
          </p>
        </div>
        <div>
          <p className={styles.sectionEyebrow}>Quem vai atender você</p>
          <h2 className={styles.sectionTitle}>Equipe de Vendas Vemari</h2>
          <p className={styles.columnBody}>
            Nossos consultores comerciais possuem conhecimento aprofundado do desenvolvimento urbano em cada
            região onde a Vemari atua, preparados para apresentar as melhores opções para sua família ou carteira de investimento.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.ctaSection}>
        <p className={styles.ctaEyebrow}>Próximo passo</p>
        <h2 className={styles.ctaTitle}>Vamos encontrar seu próximo terreno?</h2>
        <p className={styles.ctaDescription}>
          Receba a tabela atualizada de disponibilidades, tire dúvidas de pagamento e dê o primeiro passo para o seu futuro.
        </p>
        <WhatsAppLink
          brokerSlug="vendas-geral"
          label="Falar com a Central de Vendas pelo WhatsApp →"
          className={styles.ctaButton}
        />
      </section>
    </div>
  );
}

