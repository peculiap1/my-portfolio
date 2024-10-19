/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  /* DaisyUI custom themes */
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fc54db",

          secondary: "#ff00ff",

          accent: "#27272a",

          neutral: "#3f3f46",

          "base-100": "#ff00ff",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  darkMode: "class",
  plugins: [tailwindScrollbar, daisyui],
};
