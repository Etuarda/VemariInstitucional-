export type ContactInterest =
  | 'buy-lot'
  | 'broker'
  | 'customer'
  | 'partnership'
  | 'other';

export interface ContactFormState {
  readonly name: string;
  readonly phone: string;
  readonly city: string;
  readonly interest: ContactInterest | '';
}

