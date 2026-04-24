import type { Dict } from "@/lib/i18n/dictionaries";
import { EyebrowLabel } from "./EyebrowLabel";
import { ChannelsNetwork } from "./visuals/ChannelsNetwork";
import { ChannelsMobile } from "./visuals/ChannelsMobile";

export function Channels({ dict }: { dict: Dict["channels"] }) {
  return (
    <section
      id="channels"
      className="border-b border-navy-line px-6 py-24 md:px-10 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px]">
        <EyebrowLabel>{dict.eyebrow}</EyebrowLabel>
        <h2 className="mt-6 max-w-4xl font-serif text-[40px] font-normal leading-[1.08] tracking-[-0.015em] text-cream md:text-[56px]">
          <span>{dict.headingPlain}</span>{" "}
          <span className="italic text-gold">{dict.headingItalic}</span>
        </h2>

        <div className="mt-16 hidden md:block">
          <div className="mx-auto max-w-[900px]">
            <ChannelsNetwork />
          </div>
        </div>

        <div className="mt-16">
          <ChannelsMobile items={dict.items} />
        </div>

        <p className="mx-auto mt-16 max-w-[640px] text-center text-[15px] leading-[1.7] text-fg-muted md:text-[17px]">
          {dict.sub}
        </p>
      </div>
    </section>
  );
}
