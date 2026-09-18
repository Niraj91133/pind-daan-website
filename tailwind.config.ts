import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Clean Neutral Palette
        surface: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          800: "#27272A",
          900: "#18181B",
          950: "#09090B",
        },
        // Spiritual Warm Amber & Radiant Saffron (Clean & Vibrant)
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
        },
        saffron: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
          950: "#431407",
        },
        // Deep Obsidian Slate
        slate: {
          850: "#131E31",
          900: "#0F172A",
          950: "#080E1E",
        },
        // Sacred Temple Gold
        gold: {
          50: "#FDFBF7",
          100: "#FBF5E6",
          200: "#F5E6BD",
          300: "#EED28A",
          400: "#E5BA52",
          500: "#D9A02A",
          600: "#BD8119",
          700: "#945F13",
          800: "#7A4B14",
          900: "#653D15",
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Outfit", "Inter", "sans-serif"],
        serif: ["'Cinzel'", "'Playfair Display'", "Georgia", "serif"],
        editorial: ["'Playfair Display'", "Georgia", "serif"],
        devanagari: ["'Noto Sans Devanagari'", "'Noto Serif Devanagari'", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)",
        float: "0 12px 36px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)",
        glow: "0 0 25px -5px rgba(245, 158, 11, 0.25)",
        "glow-lg": "0 0 40px -8px rgba(245, 158, 11, 0.35)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
export default config;
