export function normalizeWhatsAppNumber(number = "") {
  return String(number).replace(/[^\d]/g, "");
}

export function buildWhatsAppUrl(number, message) {
  const cleanNumber = normalizeWhatsAppNumber(number);
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${cleanNumber}?text=${text}`;
}

export default {
  normalizeWhatsAppNumber,
  buildWhatsAppUrl,
};
