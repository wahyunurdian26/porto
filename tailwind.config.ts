import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 193, 106)",
        secondary: "rgb(240 242 245)",
        active: "rgb(240,242,245)",
        dark: "rgb(26 31 44)",
        "dark-2": "rgb(14 16 24)",
        muted: "rgb(87 96 118)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
