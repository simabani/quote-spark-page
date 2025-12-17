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
        lavender: "hsl(var(--lavender))",
        "baby-blue": "hsl(var(--baby-blue))",
        "soft-purple": "hsl(var(--soft-purple))",
        "light-purple": "hsl(var(--light-purple))",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "pulse-soft": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
          },
        },
        "lift": {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-8px) rotate(2deg)",
          },
        },
        "bounce-soft": {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(-4px) scale(1.02)",
          },
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(155, 135, 245, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(155, 135, 245, 0.6)",
          },
        },
        "sparkle": {
          "0%": {
            transform: "scale(0) rotate(0deg)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1) rotate(180deg)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(0) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "lift": "lift 2.5s ease-in-out infinite",
        "bounce-soft": "bounce-soft 0.4s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "sparkle": "sparkle 0.6s ease-out forwards",
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'glow-purple': '0 0 25px rgba(155, 135, 245, 0.4)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
