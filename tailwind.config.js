/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Amiko', 'sans-serif'],
      },
      colors: {
        'rose-gold': {
          DEFAULT: 'rgba(183, 110, 121, 1)',
          light: 'rgba(212, 165, 165, 1)',
        },
      },
    },
  },
  plugins: [],
}

