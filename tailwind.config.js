/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          300: '#4EE6D1',
          400: '#2DD4BF',
          500: '#26A69A',
        },
        gray: {
          800: '#2D3748',
          900: '#1F1F1F',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};