/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "875px",
      xl: "1280px",
      "2xl": "1800px",
    },
    extend: {
      colors: {
        bg: "#ffffff",
        ink: "#0b0c0d",
        line: "#e5e7eb",
        chip: "#e5e7eb",
        acc: "#22c55e",
        mute: "#6d6e6f",
      },
      keyframes: {
        "ping-once": {
          from: { transform: "scale(1)", opacity: ".7" },
          to: { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        "ping-once": "ping-once .9s ease-out 1 forwards",
      },
    },
  },
  plugins: [],
}