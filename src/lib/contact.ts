const pakistanWhatsAppNumber = '923111715499';
const internationalWhatsAppNumber = '447473943919';

export const contactEmail = 'bestabaidullahbutt@gmail.com';
export const linkedInUrl = 'https://www.linkedin.com/in/abaidabbott';

const pakistanPhone = {
  number: pakistanWhatsAppNumber,
};

const internationalPhone = {
  number: internationalWhatsAppNumber,
};

export function isLikelyPakistanVisitor() {
  const locale = navigator.language.toLowerCase();
  const locales = navigator.languages?.map(language => language.toLowerCase()) ?? [];
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return timeZone === 'Asia/Karachi' || locale.endsWith('-pk') || locales.some(language => language.endsWith('-pk'));
}

export function getWhatsAppUrl() {
  return getPhoneContact().whatsappUrl;
}

export function getPhoneContact() {
  const phone = isLikelyPakistanVisitor() ? pakistanPhone : internationalPhone;

  return {
    phoneUrl: `tel:+${phone.number}`,
    whatsappUrl: `https://wa.me/${phone.number}`,
  };
}
