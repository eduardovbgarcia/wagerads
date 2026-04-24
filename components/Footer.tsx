import type { Dict } from "@/lib/i18n/dictionaries";

export function Footer({
  dict,
  nav,
}: {
  dict: Dict["footer"];
  nav: Dict["nav"];
}) {
  return (
    <footer className="bg-navy-900 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-serif text-[20px] tracking-editorial text-cream">
              WAGERADS
            </p>
            <p className="mt-6 max-w-xs text-[14px] leading-[1.7] text-fg-muted">
              {dict.taglineLine1}
              <br />
              {dict.taglineLine2}
            </p>
          </div>

          <FooterCol
            title={dict.navigate}
            links={[
              { label: nav.work, href: "#work" },
              { label: nav.approach, href: "#approach" },
              { label: nav.channels, href: "#channels" },
              { label: nav.about, href: "#about" },
            ]}
          />
          <FooterCol
            title={dict.contact}
            links={[
              { label: "hello@wagerads.com", href: "mailto:hello@wagerads.com" },
              { label: "WhatsApp", href: "#contact" },
              { label: dict.bookCall, href: "#contact" },
            ]}
          />
          <FooterCol
            title={dict.follow}
            links={[
              { label: "LinkedIn", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "X", href: "#" },
            ]}
          />
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-navy-line pt-8 text-[12px] text-fg-faint md:flex-row">
          <p>{dict.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-fg-muted">
              {dict.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-fg-muted">
              {dict.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-label text-fg-faint">
        <span className="mr-3" aria-hidden>
          —
        </span>
        {title}
      </p>
      <ul className="mt-5 space-y-3 text-[14px] text-fg-muted">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition-colors hover:text-cream">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
