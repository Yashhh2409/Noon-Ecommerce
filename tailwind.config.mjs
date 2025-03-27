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
	}
  },
  
  plugins: [require("tailwindcss-animate")],
};
