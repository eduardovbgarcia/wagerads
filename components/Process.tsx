import type { Dict } from "@/lib/i18n/dictionaries";
import { EyebrowLabel } from "./EyebrowLabel";

export function Process({ dict }: { dict: Dict["process"] }) {
  return (
    <section className="border-b border-navy-line px-6 py-24 md:px-10 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px]">
        <EyebrowLabel>{dict.eyebrow}</EyebrowLabel>
        <h2 className="mt-6 max-w-4xl font-serif text-[40px] font-normal leading-[1.08] tracking-[-0.015em] text-cream md:text-[56px]">
          <span>{dict.headingPlain}</span>{" "}
          <span className="italic text-gold">{dict.headingItalic}</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
          {dict.steps.map((s, i) => (
            <div key={s.title}>
              <span className="font-serif text-[22px] italic text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-serif text-[20px] font-normal leading-tight tracking-[-0.01em] text-cream">
                {s.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-fg-muted">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
