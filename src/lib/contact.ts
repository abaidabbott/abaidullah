const pakistanWhatsAppNumber = '923111715499';
const internationalWhatsAppNumber = '447473943919';

export const contactEmail = 'bestabaidullahbutt@gmail.com';
export const internationalPhoneDisplay = '+44 7473 943919';
export const internationalPhoneUrl = 'tel:+447473943919';
export const linkedInUrl = 'https://www.linkedin.com/in/abaidabbott';

export function isLikelyPakistanVisitor() {
  const locale = navigator.language.toLowerCase();
  const locales = navigator.languages?.map(language => language.toLowerCase()) ?? [];
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return timeZone === 'Asia/Karachi' || locale.endsWith('-pk') || locales.some(language => language.endsWith('-pk'));
}

export function getWhatsAppUrl() {
  const phoneNumber = isLikelyPakistanVisitor() ? pakistanWhatsAppNumber : internationalWhatsAppNumber;
  return `https://wa.me/${phoneNumber}`;
}
