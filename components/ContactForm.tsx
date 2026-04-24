"use client";

import { useState } from "react";
import type { Dict } from "@/lib/i18n/dictionaries";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ dict }: { dict: Dict["form"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>([]);

  const toggleMarket = (m: string) => {
    setSelectedMarkets((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      spend: formData.get("spend"),
      markets: selectedMarkets,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2px] border border-gold/40 bg-navy-800 p-10">
        <p className="font-mono text-[10px] uppercase tracking-labelWide text-gold">
          <span className="mr-3" aria-hidden>
            —
          </span>
          {dict.successEyebrow}
        </p>
        <h3 className="mt-6 font-serif text-[28px] font-normal leading-tight tracking-[-0.01em] text-cream md:text-[32px]">
          {dict.successHeadline}
        </h3>
        <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-fg-muted">
          {dict.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2"
    >
      <Field label={dict.name} name="name" required />
      <Field label={dict.company} name="company" required />
      <Field label={dict.email} name="email" type="email" required />
      <Field label={dict.whatsapp} name="whatsapp" required />

      <div className="md:col-span-2">
        <label className="block font-mono text-[11px] uppercase tracking-label text-fg-muted">
          {dict.spend}
        </label>
        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
          {dict.spendTiers.map((t, i) => (
            <label
              key={t}
              className="relative cursor-pointer rounded-[2px] border border-navy-line bg-navy-800 p-4 text-[14px] text-fg-muted transition-colors hover:border-navy-rim has-[:checked]:border-gold has-[:checked]:bg-gold has-[:checked]:text-navy-900"
            >
              <input
                type="radio"
                name="spend"
                value={t}
                required={i === 0}
                className="peer sr-only"
              />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block font-mono text-[11px] uppercase tracking-label text-fg-muted">
          {dict.markets}
        </label>
        <div className="mt-4 flex flex-wrap gap-2">
          {dict.marketsList.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => toggleMarket(m)}
              className={`rounded-[2px] border px-4 py-2 text-[14px] transition-colors ${
                selectedMarkets.includes(m)
                  ? "border-gold bg-gold text-navy-900"
                  : "border-navy-line text-fg-muted hover:border-navy-rim"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block font-mono text-[11px] uppercase tracking-label text-fg-muted">
          {dict.message}
        </label>
        <textarea
          name="message"
          rows={4}
          className="mt-3 block w-full resize-none border-0 border-b border-navy-rim bg-transparent py-3 text-[15px] leading-[1.7] text-cream placeholder:text-fg-faint focus:border-gold focus:outline-none"
          placeholder={dict.messagePlaceholder}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-[2px] bg-gold px-7 py-3.5 text-[13px] font-medium tracking-[0.03em] text-navy-900 transition-colors hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? dict.submitting : dict.submit}
        </button>
        {status === "error" && (
          <p className="mt-4 text-[14px] text-fg-muted">{dict.errorMessage}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[11px] uppercase tracking-label text-fg-muted">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 block w-full border-0 border-b border-navy-rim bg-transparent py-3 text-[15px] text-cream placeholder:text-fg-faint focus:border-gold focus:outline-none"
      />
    </label>
  );
}
