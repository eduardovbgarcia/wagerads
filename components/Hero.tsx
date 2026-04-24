import type { Dict } from "@/lib/i18n/dictionaries";
import { CountUp } from "./CountUp";
import { HeroConstellation } from "./visuals/HeroConstellation";

export function Hero({ dict }: { dict: Dict["hero"] }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-navy-line px-6 pt-28 pb-24 md:px-10 md:pt-40 md:pb-32"
    >
      <HeroConstellation />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <p className="mb-10 font-mono text-[10px] uppercase tracking-labelWide text-gold">
          <span className="mr-3" aria-hidden>—</span>
          {dict.tag}
        </p>
        <h1 className="max-w-5xl font-serif text-[56px] font-normal leading-[1.02] tracking-[-0.02em] text-cream sm:text-[72px] md:text-[88px] lg:text-[112px]">
          <span className="block">{dict.headlinePlain}</span>
          <span className="block italic text-gold">
            {dict.headlineItalic}
          </span>
        </h1>
        <p className="mt-10 max-w-[520px] text-[17px] leading-[1.7] text-fg-muted">
          {dict.sub}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[2px] bg-gold px-7 py-3.5 text-[13px] font-medium tracking-[0.03em] text-navy-900 transition-colors hover:bg-gold-bright"
          >
            {dict.ctaPrimary}
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-2 rounded-[2px] border border-navy-rim px-7 py-3.5 text-[13px] tracking-[0.03em] text-cream transition-colors hover:border-gold hover:text-gold"
          >
            {dict.ctaSecondary}
          </a>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-10 border-t border-navy-line pt-12 sm:grid-cols-3">
          <Stat value={10} prefix="$" suffix="M+" label={dict.stat1Label} />
          <Stat value={150} prefix="$" suffix="M+" label={dict.stat2Label} />
          <Stat value={10} suffix="+" label={dict.stat3Label} />
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <CountUp
        end={value}
        prefix={prefix}
        suffix={suffix}
        className="stat-number block font-serif text-[56px] font-normal leading-none tracking-[-0.015em] text-gold md:text-[72px]"
      />
      <p className="mt-5 font-mono text-[11px] uppercase tracking-label text-fg-muted">
        {label}
      </p>
    </div>
  );
}
