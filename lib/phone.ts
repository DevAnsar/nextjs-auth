export const iranPhoneRegex = /^(?:09\d{9}|(?:\+98|0098)9\d{9})$/;

export function normalizeIranPhone(input: string): string {
  // Remove spaces and hyphens
  const raw = input.replace(/[^+0-9]/g, "");
  // Normalize to format +989XXXXXXXXX
  if (/^09\d{9}$/.test(raw)) return "+98" + raw.slice(1);
  if (/^\+989\d{9}$/.test(raw)) return raw;
  if (/^00989\d{9}$/.test(raw)) return "+" + raw.slice(2);
  return raw; // fallback
}

export function isValidIranPhone(input: string) {
  const raw = input.trim();
  return iranPhoneRegex.test(raw);
}
