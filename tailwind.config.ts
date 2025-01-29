import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        container: "var(--max-width)",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
