/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#F6F6F6",
      surface: "#FFFFFF",

      primary: "#151514",
      foreground: "#252525",

      secondary: "#666666",

      border: "#E5E5E5",

      accent: "#34A873",
    },
    extend: {},
  },
  plugins: [],
}

