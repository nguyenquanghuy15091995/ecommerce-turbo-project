/** @type {import('tailwindcss').Config} */
const {
  themeResult,
} = require("ui/configs/tailwind-custom.config");
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
  theme: themeResult,
  plugins: [],
};
