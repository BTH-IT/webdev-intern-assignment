/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        White: '#FFFFFF',
        Black: '#303841',
        Gray: '#777777',
        Yellow: '#F6C90E',
      },
    },
  },
  plugins: [],
};
