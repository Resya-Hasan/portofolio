/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screen: {
    '2xl': '1800px'
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "875px",
      xl: "1280px",
      "2xl": "1800px",
    },
    // colors: {
    //   light: "#F6F6F6",
    //   surface: "#FFFFFF",

    //   primary: "#151514",
    //   foreground: "#252525",

    //   secondary: "#666666",

    //   border: "#E5E5E5",

    //   accent: "#34A873",
    // },
    extend: {},
  },
  plugins: [],
}

