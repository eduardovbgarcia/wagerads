import type { Dict } from "@/lib/i18n/dictionaries";
import { CountUp } from "./CountUp";
import { EyebrowLabel, GoldSeal } from "./EyebrowLabel";
import { LatamMap } from "./visuals/LatamMap";

export function Reach({ dict }: { dict: Dict["reach"] }) {
  return (
    <section
      id="reach"
      className="border-b border-navy-line px-6 py-24 md:px-10 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px]">
        <EyebrowLabel>{dict.eyebrow}</EyebrowLabel>
        <div className="mt-8">
          <GoldSeal />
          <h2 className="max-w-4xl font-serif text-[40px] font-normal leading-[1.08] tracking-[-0.015em] text-cream md:text-[56px]">
            <span className="block">{dict.headingPlain}</span>
            <span className="block italic text-gold">
              {dict.headingItalic}
            </span>
          </h2>
          <p className="mt-8 max-w-[640px] text-[17px] leading-[1.7] text-fg-muted">
            {dict.sub}
          </p>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-[900px]">
            <LatamMap />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-navy-line pt-12 sm:grid-cols-3">
          <ReachStat value={11} label={dict.stats.active} />
          <ReachStat value={4} label={dict.stats.expansion} />
          <ReachStat value={1} label={dict.stats.layer} />
        </div>
      </div>
    </section>
  );
}

function ReachStat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <CountUp
        end={value}
        className="stat-number block font-serif text-[48px] font-normal leading-none tracking-[-0.015em] text-gold md:text-[64px]"
      />
      <p className="mt-5 font-mono text-[11px] uppercase tracking-label text-fg-muted">
        {label}
      </p>
    </div>
  );
}
