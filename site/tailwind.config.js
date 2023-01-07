/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6271EB",
        // light: "#7482F2",
        success: "#1ED760",
        primary: {
          DEFAULT: "#6271EB",
          50: "#2B2D3D",
          100: "#242634",
        },
        light: "#A8A8A8",
        gray: {
          50: "#DEE0E9",
          100: "#CFD1DE",
          200: "#B0B4CA",
          300: "#9297B5",
          400: "#737AA1",
          500: "#5B6186",
          600: "#464B68",
          700: "#323549",
          800: "#1D1F2B",
          900: "#08090D",
        },
      },
    },
  },
  plugins: [],
};
