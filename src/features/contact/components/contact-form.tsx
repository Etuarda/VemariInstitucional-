'use client';

import { FormEvent, useState } from 'react';
import { trackEvent } from '@/shared/lib/analytics';
import { formatBrazilianPhone } from '@/shared/lib/format-phone';
import type { ContactFormState, ContactInterest } from '../types/contact';
import { validateContactForm } from '../utils/validate-contact-form';
import styles from './contact-form.module.css';

const initialFormState: ContactFormState = {
  name: '',
  phone: '',
  city: '',
  interest: '',
};

const INTEREST_OPTIONS: ReadonlyArray<readonly [ContactInterest, string]> = [
  ['buy-lot', 'Comprar um lote'],
  ['broker', 'Falar com um corretor'],
  ['customer', 'Já sou cliente'],
  ['partnership', 'Parcerias'],
  ['other', 'Outro'],
];

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ContactFormState>(field: K, value: ContactFormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);

    const validation = validateContactForm(form);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }

    setError(null);

    trackEvent('submit_lead', {
      city: form.city || undefined,
      interest: form.interest || undefined,
    });

    setSubmitted(true);
    setForm(initialFormState);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.fieldsGrid}>
        <FormField label="Nome *">
          <input
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className={styles.input}
          />
        </FormField>

        <FormField label="WhatsApp *">
          <input
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', formatBrazilianPhone(event.target.value))}
            placeholder="(00) 90000-0000"
            className={styles.input}
            aria-describedby={error ? 'contact-error' : undefined}
          />
        </FormField>

        <FormField label="Cidade de interesse">
          <input
            name="city"
            value={form.city}
            onChange={(event) => updateField('city', event.target.value)}
            placeholder="Sua cidade"
            className={styles.input}
          />
        </FormField>

        <FormField label="Interesse">
          <select
            name="interest"
            value={form.interest}
            onChange={(event) => updateField('interest', event.target.value as ContactInterest)}
            className={styles.select}
          >
            <option value="">Selecione</option>
            {INTEREST_OPTIONS.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      {error ? (
        <p id="contact-error" role="alert" className={styles.errorAlert}>
          {error}
        </p>
      ) : null}

      {submitted ? (
        <p role="status" className={styles.successAlert}>
          Solicitação registrada. Nossa equipe retornará em breve.
        </p>
      ) : null}

      <button type="submit" className={styles.submitButton}>
        Continuar →
      </button>
    </form>
  );
}

interface FormFieldProps {
  readonly label: string;
  readonly children: React.ReactNode;
}

function FormField({ label, children }: FormFieldProps) {
  return (
    <label className={styles.fieldLabel}>
      <span className={styles.fieldLabelText}>{label}</span>
      {children}
    </label>
  );
}
