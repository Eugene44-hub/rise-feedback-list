/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "h1": "32px",
        "h2": "24px",
        "h3": "18px",
        "body1": "16px",
        "body2": "14px",
        "body3": "12px",
        "body4": "10px",
        "body5": "8px",
        "body6": "6px",
        "body7": "4px",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        "tomato-grotesk": ["TomatoGrotesk", "sans-serif"],

      },
      colors: {
        primary: "hsl(var(--color-primary))",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        "button-neutral": "var(--color-button-neutral)",
        "border-primary": "var(--border-primary-color)",
        "border-secondary": "var(--border-secondary-color)",

      },
    },
  },
  plugins: [],
} 