import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        trustworthiness: '#014526',
      },
      keyframes: {
        borderPulse: {
         '0%, 100%': { borderColor: '#014526' },   // Original Color
          '25%': { borderColor: '#026B39' },         // Lighter Shade
          '50%': { borderColor: '#038F4C' },         // Even Lighter Shade
          '75%': { borderColor: '#01361E' },         // Darker Shade
        },
      },
      animation: {
        borderPulse: 'borderPulse 6s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
