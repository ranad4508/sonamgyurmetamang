import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New warm color palette
        crimson: {
          DEFAULT: "#DC143C",
          light: "#E45A70",
          dark: "#B01030",
        },
        maroon: {
          DEFAULT: "#800000",
          light: "#A52A2A",
          dark: "#5C0000",
        },
        ruby: {
          DEFAULT: "#E0115F",
          light: "#E84B82",
          dark: "#B00C4C",
        },
        saffron: {
          DEFAULT: "#F4C430",
          light: "#F7D35F",
          dark: "#D1A626",
        },
        gold: {
          DEFAULT: "#FFD700",
          light: "#FFDF33",
          dark: "#CCAC00",
        },
        amber: {
          DEFAULT: "#FFBF00",
          light: "#FFCF33",
          dark: "#CC9900",
        },
        orange: {
          DEFAULT: "#FF7F00",
          light: "#FF9933",
          dark: "#CC6600",
        },
        vermilion: {
          DEFAULT: "#E34234",
          light: "#E9695E",
          dark: "#B6352A",
        },
        burgundy: {
          DEFAULT: "#800020",
          light: "#A3334D",
          dark: "#5C0017",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
