"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  localeLongNames,
  localeNames,
  locales,
  type Locale,
} from "@/lib/i18n/config";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  function pathForLocale(target: Locale) {
    if (!pathname) return `/${target}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${target}`;
    segments[0] = target;
    return "/" + segments.join("/");
  }

  return (
    <div className="flex items-center gap-px border border-navy-rim/70 text-[11px]">
      {locales.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={pathForLocale(l)}
            hrefLang={l}
            aria-label={localeLongNames[l]}
            aria-current={active ? "true" : undefined}
            className={`px-2.5 py-1.5 font-mono uppercase tracking-label transition-colors ${
              active
                ? "bg-gold text-navy-900"
                : "text-fg-muted hover:text-cream"
            }`}
          >
            {localeNames[l]}
          </Link>
        );
      })}
    </div>
  );
}
