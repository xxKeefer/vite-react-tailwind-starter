/** @type {import('tailwindcss').Config} */
module.exports = module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["winter"],
  },
};

