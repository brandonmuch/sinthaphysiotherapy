/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        lilac: '#DBC1E8',
        'lilac-light': '#F3EBF7',
        purple: '#30133E',
        'purple-light': '#4B255F',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};