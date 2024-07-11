/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
        "noto-serif-display": ['"Noto Serif Display"', "serif"],
        "noto-serif": ['"Noto Serif"', "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
