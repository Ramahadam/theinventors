/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-custom': '#929290',
        'black-custom': '#222222',
        'color-secondary': '#d87297',
        'color-primary': '#e36658',
        'color-accent': '#fbcb50',
        'color-primary-linear': 'linear-gradient(90deg, #d87297 0%, #e36658 50%, #fbcb50 100%)',
      },
        borderRadius: {
        '37': '37px',
        '27': '27px',
        '25': '25px',
        '15': '15px',
      },
        fontFamily: {
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};