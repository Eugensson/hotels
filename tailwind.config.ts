import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      white: "#ffffff",
      black: "#273029",
      soft_green: {
        DEFAULT: "#85c7dc",
        secondary: "#f3f9fb",
      },
      grey: {
        DEFAULT: "#888888",
        secondary: "#f8f8f8",
      },
      orange: "#f2994a",
      outline: "#f1f1f1",
      pink: "#f3d1d7",
      body: "#e5e5e5",
    },
    fontFamily: {
      openSans: ["var(--font-openSans)", "sans-serif"],
    },
    backgroundImage: {
      hero: "url('/hero/bg.png')",
      hero2: "url('/hero/bg-2.png')",
    },
    extend: {},
  },
  plugins: [animate],
} satisfies Config;
