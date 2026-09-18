export function onlyDigits(value: string): string {
  return value.replace(/\D/g, '');
}

export function formatBrazilianPhone(value: string): string {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function isValidBrazilianMobile(value: string): boolean {
  return onlyDigits(value).length === 11;
}

