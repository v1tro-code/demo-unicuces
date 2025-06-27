import type { Config } from "tailwindcss"

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
          DEFAULT: "#C41E3A", // Rojo institucional de San Martín
          foreground: "hsl(var(--primary-foreground))",
          50: "#fef2f2",
          100: "#fee2e2", 
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#C41E3A", // Color principal - rojo institucional
          900: "#7f1d1d",
        },
        secondary: {
          DEFAULT: "#1e3a8a", // Azul institucional de San Martín
          foreground: "hsl(var(--secondary-foreground))",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e3a8a", // Color principal - azul institucional
          900: "#1e1b4b",
        },
        // Colores institucionales de San Martín
        'sanmartin': {
          'red': '#C41E3A',        // Rojo principal
          'red-dark': '#991B2E',   // Rojo oscuro
          'red-light': '#E6485F',  // Rojo claro
          'blue': '#1e3a8a',       // Azul principal
          'blue-dark': '#1e40af',  // Azul oscuro
          'blue-light': '#3b82f6', // Azul claro
          'gold': '#FDB813',       // Dorado/amarillo de apoyo
          'cream': '#F8F6F3',      // Crema
          'gray': '#6B7280',       // Gris neutro
        },
        accent: {
          DEFAULT: "#F5F5F5", // Blanco/gris muy claro para contraste
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "#F5F5F5", // Gris claro
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
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
} satisfies Config

export default config
