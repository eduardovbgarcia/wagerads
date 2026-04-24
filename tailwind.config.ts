import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          900: "#0A1628",
          800: "#0F1D33",
          700: "#152748",
          line: "#1C2E4A",
          rim: "#2A3E5E",
        },
        gold: {
          DEFAULT: "#C9A961",
          muted: "#8A7340",
          bright: "#D4B574",
          deep: "#2A2418",
        },
        cream: "#F2EBD8",
        fg: {
          DEFAULT: "#F2EBD8",
          muted: "#8898B2",
          faint: "#5A6A85",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      letterSpacing: {
        editorial: "0.04em",
        label: "0.18em",
        labelWide: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
