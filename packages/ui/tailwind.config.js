/** @type {import('tailwindcss').Config} */
const { themeResult } = require("./configs/tailwind-custom.config.js");
module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx}",
    //   "../../packages/ui/**/*.{ts,tsx}",
  ],
  theme: themeResult,
  plugins: [],
};
