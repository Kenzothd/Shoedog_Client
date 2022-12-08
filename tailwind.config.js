/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "90%": { opacity: "0.95" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadein: "fadein 0.8s",
      },
      fontFamily: {
        odor: ['Odor Mean Chey', "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
