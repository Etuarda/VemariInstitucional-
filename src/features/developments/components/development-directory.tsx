'use client';

import { useMemo, useState } from 'react';
import type { Development } from '../types/development';
import { extractUniqueCities, filterDevelopments } from '../utils/filter-developments';
import { DevelopmentCard } from './development-card';
import styles from './development-directory.module.css';

interface DevelopmentDirectoryProps {
  readonly items: readonly Development[];
}

export function DevelopmentDirectory({ items }: DevelopmentDirectoryProps) {
  const [city, setCity] = useState('all');

  const cities = useMemo(() => extractUniqueCities(items), [items]);

  const filtered = useMemo(
    () => filterDevelopments(items, { city }),
    [items, city],
  );

  return (
    <div>
      <div className={styles.filterBar}>
        <FilterSelect
          label="Filtrar por Cidade"
          value={city}
          onChange={setCity}
          options={cities.map((value) => [value, value] as const)}
        />
        <p className={styles.counter}>{filtered.length} empreendimento(s)</p>
      </div>

      {filtered.length ? (
        <div className={styles.cardsGrid}>
          {filtered.map((item) => (
            <DevelopmentCard key={item.id} development={item} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h2 className={styles.emptyTitle}>Nenhum empreendimento encontrado.</h2>
          <p className={styles.emptyText}>Ajuste a cidade selecionada para visualizar outras opções.</p>
        </div>
      )}
    </div>
  );
}

interface FilterSelectProps {
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly options: ReadonlyArray<readonly [string, string]>;
}

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  return (
    <label className={styles.filterField}>
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.select}
      >
        <option value="all">Todas as cidades</option>
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
