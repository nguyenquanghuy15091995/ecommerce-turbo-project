module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "@next/next/no-img-element": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-var": "error",
    "no-unused-vars": "warn",
  },
};
