import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/shared/lib/routes';
import { getAssetPath } from '@/shared/lib/assets';
import styles from './sales-card.module.css';

export function SalesCard() {
  return (
    <article className={styles.card}>
      <div>
        <div className={styles.visualWrapper}>
          <span className={styles.badge}>Canal Direto</span>
          <div className={styles.logoWrapper}>
            <Image
              src={getAssetPath('/brand/vemari-logo-white.png')}
              alt="Vemari Vendas Geral"
              width={260}
              height={88}
              className={styles.logo}
            />
            <p className={styles.tagline}>Central de Atendimento & Vendas</p>
          </div>
          <div className={styles.visualFooter}>
            <span>CRECI PJ 584</span>
            <span>PI & MA</span>
          </div>
        </div>

        <p className={styles.role}>Atendimento Corporativo</p>
        <h3 className={styles.name}>Vendas Geral</h3>
        <p className={styles.meta}>Atendimento Oficial · Todos os Empreendimentos</p>
        <p className={styles.bio}>
          Fale diretamente com a equipe interna da Vemari para consultar disponibilidades de lotes
          em qualquer empreendimento, tabelas vigentes e negociação direta.
        </p>
      </div>

      <div>
        <Link href={routes.sales} className={styles.link}>
          Conhecer Vendas Geral →
        </Link>
      </div>
    </article>
  );
}

