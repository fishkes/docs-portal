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
          primary: '#001eff',
          dark: '#142963'
        },
        dark: {
          primary: '#1b1b1d'
        }
      },
      backgroundImage: {
        hero: 'url(/img/bg.png)'
      },
      height: {
        45: '11.25rem'
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
