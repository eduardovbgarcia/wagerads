import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import {
  defaultLocale,
  localeHtmlLang,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://wagerads.com";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(params.locale as Locale)) return {};
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  const languages = Object.fromEntries(
    locales.map((l) => [localeHtmlLang[l], `${SITE_URL}/${l}`])
  ) as Record<string, string>;
  languages["x-default"] = `${SITE_URL}/${defaultLocale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: "WagerAds",
      locale: localeHtmlLang[locale],
      type: "website",
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <html
      lang={localeHtmlLang[locale]}
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="bg-navy-900 text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
