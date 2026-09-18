import { onlyDigits } from './format-phone';

interface WhatsAppMessageInput {
  readonly phone: string;
  readonly brokerName?: string;
  readonly developmentName?: string;
  readonly lotLabel?: string;
}

export function buildWhatsAppMessage({
  brokerName,
  developmentName,
  lotLabel,
}: Omit<WhatsAppMessageInput, 'phone'>): string {
  const greeting = brokerName ? `Olá, ${brokerName}.` : 'Olá, equipe Vemari.';
  const context = developmentName
    ? ` Conheci o empreendimento ${developmentName} pelo site da Vemari e gostaria de receber mais informações.`
    : ' Conheci a Vemari pelo site e gostaria de receber mais informações sobre os empreendimentos.';
  const lotContext = lotLabel ? ` Tenho interesse no ${lotLabel}.` : '';

  return `${greeting}${context}${lotContext}`;
}

export function buildWhatsAppUrl(input: WhatsAppMessageInput): string {
  const phone = onlyDigits(input.phone);
  const message = buildWhatsAppMessage(input);

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
