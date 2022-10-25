/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "'lora', serif",
        paragraph: "'Acme', sans-serif"
      }
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}