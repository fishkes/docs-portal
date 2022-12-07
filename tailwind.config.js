/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.mdx"],
  darkMode: ['class', '[data-theme="dark"]'],
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
