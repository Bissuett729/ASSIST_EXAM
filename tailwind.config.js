/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4361EE',
        textPrimaryLight: '#171923',
        textPrimaryDark: '#F0F1F5',
        main: {
          light: '#F4F5F9',
          dark: '#171923'
        },
        layout: {
          light: '#FCFCFC',
          dark: '#212330'
        },
        card: {
          light: '#FFFFFF',
          dark: '#212330'
        }
      },
      boxShadow: {
        insetShadow : 'inset #000000 0px 0px 37px -41px',
      }
    },
  },
  plugins: [],
}