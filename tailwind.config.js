/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/global.css"],

  theme: {
    extend: {
      colors: {
        "primary-bg": "var(--primary-bg-color)",
        "primary-text": "var(--primary-text-color)",
        "secondary-bg": "var(--secondary-bg-color)",
        "secondary-text": "var(--secondary-text-color)",
        highlight: "var(--highlight-color)",
        "button-text": "var(--button-text-color)",
      },
    },
  },
  plugins: [],
};
