import type { Dict } from "@/lib/i18n/dictionaries";
import { ContactForm } from "./ContactForm";
import { EyebrowLabel } from "./EyebrowLabel";

export function FinalCTA({
  dict,
  form,
}: {
  dict: Dict["finalCta"];
  form: Dict["form"];
}) {
  return (
    <section
      id="contact"
      className="border-b border-navy-line px-6 py-24 md:px-10 md:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <EyebrowLabel>{dict.eyebrow}</EyebrowLabel>
          <h2 className="mt-6 font-serif text-[48px] font-normal leading-[1.02] tracking-[-0.02em] text-cream md:text-[64px] lg:text-[72px]">
            <span className="block">{dict.headlinePlain}</span>
            <span className="block italic text-gold">
              {dict.headlineItalic}
            </span>
          </h2>
          <p className="mt-10 max-w-md text-[17px] leading-[1.7] text-fg-muted">
            {dict.sub}
          </p>
          <div className="mt-12 space-y-5 text-[15px] text-fg-muted">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-label text-fg-faint">
                {dict.emailLabel}
              </p>
              <p className="mt-1 text-cream">hello@wagerads.com</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-label text-fg-faint">
                {dict.whatsappLabel}
              </p>
              <p className="mt-1 text-cream">+55 11 00000-0000</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <ContactForm dict={form} />
        </div>
      </div>
    </section>
  );
}
