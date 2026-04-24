type Item = { name: string; sub: string };

export function ChannelsMobile({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col gap-6 md:hidden">
      {items.map((c, i) => (
        <div key={c.name} className="relative flex items-start gap-4">
          {i < items.length - 1 && (
            <div className="absolute left-[7px] top-4 h-full w-px bg-gold/30" />
          )}
          <div className="relative z-10 mt-1 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full border border-gold bg-navy-900">
            <div className="h-1.5 w-1.5 rounded-full bg-gold" />
          </div>
          <div>
            <p className="font-serif text-[18px] leading-tight text-cream">
              {c.name}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-label text-fg-faint">
              {c.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
