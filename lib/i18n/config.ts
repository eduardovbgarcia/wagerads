export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

export const localeLongNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
};
