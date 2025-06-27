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
          DEFAULT: "#4A9D96", // Verde azulado/teal principal de San Martín
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0fffe",
          100: "#ccfdfb", 
          200: "#99faf6",
          300: "#5ef2ec",
          400: "#2dd9d2",
          500: "#4A9D96", // Color principal
          600: "#3a7f79",
          700: "#2f635f",
          800: "#28504e",
          900: "#264343",
        },
        secondary: {
          DEFAULT: "#2C5F5F", // Verde azulado más oscuro de San Martín
          foreground: "hsl(var(--secondary-foreground))",
          50: "#f6f8f8",
          100: "#e1e8e8",
          200: "#c3d1d1",
          300: "#9db0b0",
          400: "#708787",
          500: "#56696b",
          600: "#485859",
          700: "#3e4a4b",
          800: "#2C5F5F", // Color principal
          900: "#253535",
        },
        // Colores inspirados en la identidad de San Martín
        'sanmartin': {
          'teal': '#4A9D96',
          'teal-dark': '#2C5F5F',
          'teal-light': '#6BB6AF',
          'navy': '#1B3B5C',
          'cream': '#F8F6F3',
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
