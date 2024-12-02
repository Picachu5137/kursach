/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#88cc88',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

