"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1800,
  className,
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(eased * end));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix && <span className="text-[0.6em] align-baseline">{prefix}</span>}
      {value.toLocaleString("en-US")}
      {suffix && <span className="text-[0.6em] align-baseline">{suffix}</span>}
    </span>
  );
}
