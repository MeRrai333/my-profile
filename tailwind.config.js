/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      MainColor: '#CCEBFC',
      SpaceColor: '#FFFFFF',
      HoverColor: '#A8C1CE',
      DisableColor: '#F1F1F1',
    },
    extend: {
      spacing:{
        '80vh'  : '68vh',
        '95vh'  : '97vh',
        '232px' : '232px',
        '888px' : '888px',
        '1/4'   : '25%',
        '3/4'   : '75%',
        '98%'   : '98%',
      }
    },
  },
  plugins: [],
}