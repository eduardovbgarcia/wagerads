export function EyebrowLabel({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "muted";
}) {
  const color = tone === "gold" ? "text-gold" : "text-fg-muted";
  return (
    <p
      className={`font-mono text-[10px] uppercase tracking-labelWide ${color}`}
    >
      <span className="mr-3" aria-hidden>
        —
      </span>
      {children}
    </p>
  );
}

export function GoldSeal() {
  return <div className="mb-8 h-px w-16 bg-gold" aria-hidden />;
}
