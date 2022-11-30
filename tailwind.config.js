/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter,sans-serif'
      },
      colors: {
        blue: {
          300: '#00ffe4',
          primary: '#001eff'
        },
        dark: {
          primary: '#1b1b1d'
        }
      },
      backgroundImage: {
        hero: 'url(/img/bg.png)'
      }
    },
  },
  plugins: [],
}
