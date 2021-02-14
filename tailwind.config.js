const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      blue: colors.blue,
      red: colors.rose
    },
    extend: {
      fontFamily: {
        gabriela: ['Gabriela', 'serif'],
        baskervile: ['Baskervville', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark']
    }
  },
  plugins: []
};
