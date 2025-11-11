/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3252DF',
        secondary: '#152C5B',
        dark: '#152C5B',
        accent: '#1ABC9C',
        'button-blue': '#003DFC',
        'light-blue': '#EAF1FF',
        'light-gray': '#FAFAFA',
        'border-gray': '#D2D2D2',
        'text-gray': '#B0B0B0',
        gray: {
          100: '#F5F5F5',
          200: '#EFF4FA',
          300: '#C2C2C2',
          400: '#8F9BB3',
          500: '#757575',
          600: '#404040',
          700: '#222B45',
          800: '#0A0A0A',
        },
        blue: {
          500: '#0095FF',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '36': '36px',
        '26': '26px',
        '20': '20px',
        '18': '18px',
        '15': '15px',
        '14': '14px',
      },
      lineHeight: {
        '54': '54px',
        '39': '39px',
        '30': '30px',
        '27': '27px',
        '24': '24px',
        '22.5': '22.5px',
        '21': '21px',
      },
      spacing: {
        '150': '150px',
      },
    },
  },
  plugins: [],
}
