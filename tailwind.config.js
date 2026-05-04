/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4f8',
          100: '#d9e2ed',
          200: '#b3c5db',
          700: '#1a2d42',
          800: '#142338',
          900: '#0F1C2E',
        },
        gold: {
          300: '#e8cc85',
          400: '#D4A853',
          500: '#C9A84C',
          600: '#b8953a',
        },
        cream: {
          DEFAULT: '#F8F7F4',
          50:     '#FAFAF8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
