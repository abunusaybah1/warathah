import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-dark": "#0d2318",
        "green-mid": "#163d28",
        "green-light": "#1e5438",
        "gold": "#c9a84c",
        "gold-light": "#e2c97e",
        "gold-pale": "#f5e9c4",
        "cream": "#faf6ee",
        "text-dark": "#0d1f17",
        "text-muted": "#5a7362",
      },
    },
  },
  plugins: [],
};
export default config;
