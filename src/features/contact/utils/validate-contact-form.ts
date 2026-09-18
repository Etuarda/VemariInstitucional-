import { isValidBrazilianMobile } from '@/shared/lib/format-phone';
import type { ContactFormState } from '../types/contact';

export interface ValidationResult {
  readonly isValid: boolean;
  readonly error: string | null;
}

export function validateContactForm(form: ContactFormState): ValidationResult {
  if (!form.name.trim()) {
    return { isValid: false, error: 'Informe seu nome para continuar.' };
  }

  if (!isValidBrazilianMobile(form.phone)) {
    return { isValid: false, error: 'Informe um WhatsApp com 11 dígitos.' };
  }

  return { isValid: true, error: null };
}

