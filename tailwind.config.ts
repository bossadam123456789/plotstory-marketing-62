import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        sand: "#F5F5F5",
        forest: "#2F5233",
        primary: {
          DEFAULT: "#2F5233",
          dark: "#1A2E1D",
        },
        secondary: "#4A4A4A",
        accent: "#8A9B8E",
        background: "#FFFFFF",
        foreground: "#1A1A1A",
        muted: {
          DEFAULT: "#F8F8F8",
          foreground: "#666666",
        },
        border: "#E8E8E8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #FFFFFF, #F5F5F5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;