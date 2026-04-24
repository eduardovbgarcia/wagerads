import type { Dict } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Nav({
  dict,
  locale,
}: {
  dict: Dict["nav"];
  locale: Locale;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-line bg-navy-900/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-serif text-[20px] tracking-editorial text-cream"
        >
          WAGERADS
        </a>
        <nav className="hidden items-center gap-10 text-[13px] tracking-[0.03em] text-fg-muted md:flex">
          <a href="#work" className="transition-colors hover:text-cream">
            {dict.work}
          </a>
          <a href="#approach" className="transition-colors hover:text-cream">
            {dict.approach}
          </a>
          <a href="#channels" className="transition-colors hover:text-cream">
            {dict.channels}
          </a>
          <a href="#about" className="transition-colors hover:text-cream">
            {dict.about}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <LocaleSwitcher current={locale} />
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-[2px] border border-navy-rim px-5 py-2.5 text-[13px] tracking-[0.03em] text-cream transition-colors hover:border-gold hover:text-gold sm:inline-flex"
          >
            {dict.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
