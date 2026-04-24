import type { Dict } from "@/lib/i18n/dictionaries";
import { CountUp } from "./CountUp";
import { EyebrowLabel, GoldSeal } from "./EyebrowLabel";

export function Results({ dict }: { dict: Dict["results"] }) {
  return (
    <section
      id="work"
      className="border-b border-navy-line px-6 py-24 md:px-10 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px]">
        <EyebrowLabel>{dict.eyebrow}</EyebrowLabel>
        <div className="mt-8">
          <GoldSeal />
          <h2 className="max-w-4xl font-serif text-[40px] font-normal italic leading-[1.08] tracking-[-0.015em] text-gold md:text-[56px]">
            {dict.headingItalic}
          </h2>
        </div>

        <div
          id="results"
          className="mt-20 grid grid-cols-2 gap-10 border-t border-navy-line pt-14 md:grid-cols-4"
        >
          <BigStat value={10} prefix="$" suffix="M+" label={dict.stats.managed} />
          <BigStat value={150} prefix="$" suffix="M+" label={dict.stats.deposits} />
          <BigStat value={10} suffix="+" label={dict.stats.markets} />
          <RangeStat text="5–12" suffix="x" label={dict.stats.uplift} />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {dict.cases.map((c) => (
            <article
              key={c.tag}
              className="rounded-[2px] border border-navy-line bg-navy-800 p-10 transition-colors hover:border-navy-rim"
            >
              <p className="font-mono text-[11px] uppercase tracking-label text-fg-muted">
                {c.tag}
              </p>
              <h3 className="mt-8 font-serif text-[22px] font-normal italic leading-tight tracking-[-0.01em] text-cream">
                {c.headline}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.7] text-fg-muted">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigStat({
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
        className="block font-serif text-[40px] font-normal leading-none tracking-[-0.015em] text-gold md:text-[56px]"
      />
      <p className="mt-5 font-mono text-[11px] uppercase tracking-label text-fg-muted">
        {label}
      </p>
    </div>
  );
}

function RangeStat({
  text,
  suffix,
  label,
}: {
  text: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <span className="stat-number block font-serif text-[40px] font-normal leading-none tracking-[-0.015em] text-gold md:text-[56px]">
        {text}
        {suffix && (
          <span className="align-baseline text-[0.6em]">{suffix}</span>
        )}
      </span>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-label text-fg-muted">
        {label}
      </p>
    </div>
  );
}
