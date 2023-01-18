/** @type {import('tailwindcss').Config} */
const {
  themeResult
} = require("../../packages/ui/configs/tailwind-custom.config.js");
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  theme: {
    ...themeResult
  },
  plugins: [],
};
