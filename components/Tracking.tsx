import type { Dict } from "@/lib/i18n/dictionaries";
import { EyebrowLabel, GoldSeal } from "./EyebrowLabel";
import { TrackingDiagram } from "./visuals/TrackingDiagram";
import { TrackingDiagramMobile } from "./visuals/TrackingDiagramMobile";

export function Tracking({ dict }: { dict: Dict["tracking"] }) {
  return (
    <section
      id="tracking"
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

        <div className="mt-16 hidden md:block">
          <div className="mx-auto max-w-[1000px]">
            <TrackingDiagram />
          </div>
        </div>
        <div className="mt-16 md:hidden">
          <TrackingDiagramMobile />
        </div>
      </div>
    </section>
  );
}
