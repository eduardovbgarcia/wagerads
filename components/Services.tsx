import type { Dict } from "@/lib/i18n/dictionaries";
import { EyebrowLabel } from "./EyebrowLabel";

export function Services({ dict }: { dict: Dict["services"] }) {
  return (
    <section
      id="approach"
      className="border-b border-navy-line px-6 py-24 md:px-10 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px]">
        <EyebrowLabel>{dict.eyebrow}</EyebrowLabel>
        <h2 className="mt-6 max-w-4xl font-serif text-[40px] font-normal leading-[1.08] tracking-[-0.015em] text-cream md:text-[56px]">
          <span className="block">{dict.headingPlain}</span>
          <span className="block italic text-gold">{dict.headingItalic}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-fg-muted">
          {dict.sub}
        </p>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {dict.items.map((s, i) => (
            <article
              key={s.title}
              className="group rounded-[2px] border border-navy-line bg-navy-800 p-10 transition-colors hover:border-navy-rim"
            >
              <span className="font-serif text-[14px] italic text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-8 font-serif text-[24px] font-normal leading-tight tracking-[-0.01em] text-cream">
                {s.title}
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-fg-muted">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
