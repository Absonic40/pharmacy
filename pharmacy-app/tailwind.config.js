/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xl2': '900px',
        'xl3': '1100px',
      },
    },
  },
  plugins: [],
}