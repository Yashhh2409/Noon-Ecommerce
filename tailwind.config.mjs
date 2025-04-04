/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        primary: "#6b7280",
        secondary: "#1f2937",
        green: "#38AE04",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        progress: "progress 0.8s ease-in-out",
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },

      screens: {
        xs: "200px",
        sm: "400px", // Small (phones)
        md: "768px", // Medium (tablets)
        lg: "1024px", // Large (laptops)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
