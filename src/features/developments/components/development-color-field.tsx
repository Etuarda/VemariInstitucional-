import styles from './development-color-field.module.css';

interface ColorFieldPalette {
  readonly baseColor: string;
  readonly blockA: {
    readonly bg: string;
    readonly style: React.CSSProperties;
  };
  readonly blockB: {
    readonly bg: string;
    readonly style: React.CSSProperties;
  };
  readonly blockC?: {
    readonly bg: string;
    readonly style: React.CSSProperties;
  };
  readonly textColor: string;
  readonly monogram: string;
}

const PALETTES: Record<string, ColorFieldPalette> = {
  'jardins-umbuzeiro': {
    baseColor: '#172033', // vemari-navy
    blockA: {
      bg: '#c4933d', // vemari-gold
      style: { bottom: 0, right: 0, width: '52%', height: '62%' },
    },
    blockB: {
      bg: '#2b4c7e', // vemari-blue
      style: { top: 0, left: 0, width: '42%', height: '48%' },
    },
    blockC: {
      bg: '#f8f6f0', // ivory highlight
      style: { top: '35%', left: '35%', width: '18%', height: '18%', opacity: 0.15 },
    },
    textColor: '#ffffff',
    monogram: 'JU',
  },
  'nova-valenca': {
    baseColor: '#2b4c7e', // vemari-blue
    blockA: {
      bg: '#172033', // vemari-navy
      style: { top: 0, right: 0, width: '58%', height: '70%' },
    },
    blockB: {
      bg: '#c4933d', // vemari-gold
      style: { bottom: 0, left: 0, width: '38%', height: '45%' },
    },
    textColor: '#ffffff',
    monogram: 'NV',
  },
  'boa-vida': {
    baseColor: '#121824', // vemari-ink
    blockA: {
      bg: '#2b4c7e', // vemari-blue
      style: { bottom: 0, right: 0, width: '60%', height: '60%' },
    },
    blockB: {
      bg: '#c4933d', // vemari-gold
      style: { top: 0, left: '10%', width: '32%', height: '42%' },
    },
    textColor: '#ffffff',
    monogram: 'BV',
  },
  'nova-vida': {
    baseColor: '#1e2c44',
    blockA: {
      bg: '#121824',
      style: { bottom: 0, left: 0, width: '55%', height: '55%' },
    },
    blockB: {
      bg: '#c4933d',
      style: { top: 0, right: 0, width: '40%', height: '45%' },
    },
    textColor: '#ffffff',
    monogram: 'NV',
  },
  'nova-esperanca': {
    baseColor: '#172033',
    blockA: {
      bg: '#c4933d',
      style: { top: 0, right: '15%', width: '45%', height: '50%' },
    },
    blockB: {
      bg: '#2b4c7e',
      style: { bottom: 0, right: 0, width: '50%', height: '55%' },
    },
    textColor: '#ffffff',
    monogram: 'NE',
  },
  'barreirinhas-ma': {
    baseColor: '#1f385c',
    blockA: {
      bg: '#172033',
      style: { bottom: 0, left: 0, width: '52%', height: '60%' },
    },
    blockB: {
      bg: '#c4933d',
      style: { bottom: 0, right: 0, width: '40%', height: '42%' },
    },
    textColor: '#ffffff',
    monogram: 'BH',
  },
};

const DEFAULT_PALETTE: ColorFieldPalette = {
  baseColor: '#172033',
  blockA: {
    bg: '#2b4c7e',
    style: { bottom: 0, right: 0, width: '55%', height: '58%' },
  },
  blockB: {
    bg: '#c4933d',
    style: { top: 0, left: 0, width: '36%', height: '46%' },
  },
  blockC: {
    bg: '#ffffff',
    style: { top: '30%', right: '30%', width: '20%', height: '20%', opacity: 0.1 },
  },
  textColor: '#ffffff',
  monogram: 'V',
};

export interface DevelopmentColorFieldProps {
  readonly name: string;
  readonly city?: string;
  readonly state?: string;
  readonly status?: string;
  readonly slug?: string;
  readonly variant?: 'card' | 'marquee' | 'hero' | 'editorial';
  readonly className?: string;
  readonly showDetails?: boolean;
}

export function DevelopmentColorField({
  name,
  city,
  state,
  status,
  slug = '',
  variant = 'card',
  className = '',
  showDetails = true,
}: DevelopmentColorFieldProps) {
  const palette = PALETTES[slug] ?? DEFAULT_PALETTE;

  const variantClass =
    variant === 'marquee'
      ? styles.variantMarquee
      : variant === 'hero'
        ? styles.variantHero
        : variant === 'editorial'
          ? styles.variantEditorial
          : styles.variantCard;

  const locationText = city && state ? `${city} — ${state}` : city ?? state ?? '';

  return (
    <div
      className={`${styles.fieldContainer} ${variantClass} ${className}`}
      style={{ backgroundColor: palette.baseColor, color: palette.textColor }}
      aria-label={`Composição visual de ${name}`}
      role="img"
    >
      {/* Base background color */}
      <div
        className={styles.fieldLayerBase}
        style={{ backgroundColor: palette.baseColor }}
      />

      {/* Overlapping geometric color blocks */}
      <div
        className={styles.fieldLayerBlockA}
        style={{ backgroundColor: palette.blockA.bg, ...palette.blockA.style }}
      />
      <div
        className={styles.fieldLayerBlockB}
        style={{ backgroundColor: palette.blockB.bg, ...palette.blockB.style }}
      />
      {palette.blockC ? (
        <div
          className={styles.fieldLayerBlockC}
          style={{ backgroundColor: palette.blockC.bg, ...palette.blockC.style }}
        />
      ) : null}

      {/* Architectural subtle grid pattern */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* Monogram watermark */}
      <span className={styles.monogramWatermark} aria-hidden="true">
        {palette.monogram}
      </span>

      {/* Foreground Content */}
      {showDetails ? (
        <>
          <div className={styles.topRow}>
            {locationText ? (
              <span className={styles.territoryTag} style={{ color: '#ffffff' }}>
                {locationText}
              </span>
            ) : (
              <span className={styles.brandSignature}>VEMARI</span>
            )}
            {status ? (
              <span
                className={styles.statusBadge}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {status}
              </span>
            ) : null}
          </div>

          <div className={styles.bottomRow}>
            <div>
              <p className={styles.developmentName}>{name}</p>
            </div>
            <span className={styles.brandSignature}>TERRITÓRIO</span>
          </div>
        </>
      ) : null}
    </div>
  );
}

