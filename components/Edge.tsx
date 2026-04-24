import type { Dict } from "@/lib/i18n/dictionaries";
import { EyebrowLabel, GoldSeal } from "./EyebrowLabel";

export function Edge({ dict }: { dict: Dict["edge"] }) {
  return (
    <section
      id="about"
      className="border-b border-navy-line px-6 py-24 md:px-10 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px]">
        <EyebrowLabel>{dict.eyebrow}</EyebrowLabel>
        <div className="mt-8">
          <GoldSeal />
          <h2 className="max-w-4xl font-serif text-[40px] font-normal leading-[1.08] tracking-[-0.015em] text-cream md:text-[56px]">
            {dict.heading}
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {dict.items.map((e, i) => (
            <article
              key={e.title}
              className="rounded-[2px] border border-navy-line bg-navy-800 p-10 transition-colors hover:border-navy-rim"
            >
              <span className="font-serif text-[22px] italic text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-serif text-[22px] font-normal leading-tight tracking-[-0.01em] text-cream">
                {e.title}
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-fg-muted">
                {e.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
