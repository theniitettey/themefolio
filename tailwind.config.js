/**@type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        grey: {
          50: "#f7f6f6",
          100: "#3C3633",
          200: "#8A7D77",
        },
        glow: {
          100: "#1EC3F7",
          200: "#301934",
        },
        ground: {
          100: "#262626",
          200: "#BAABAB",
          300: "#B5B3B3",
          400: "#424242",
          500: "#AFAFAF",
          600: "#6D6565",
          700: "#301934",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
