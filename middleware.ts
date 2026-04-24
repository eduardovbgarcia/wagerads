import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const languages = acceptLanguage
    .split(",")
    .map((x) => x.split(";")[0].trim().toLowerCase());
  for (const lang of languages) {
    if (lang.startsWith("pt")) return "pt";
    if (lang.startsWith("es")) return "es";
    if (lang.startsWith("en")) return "en";
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  const detected = detectLocale(req.headers.get("accept-language"));
  const url = req.nextUrl.clone();
  url.pathname = `/${detected}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.svg|.*\\..*).*)"],
};
