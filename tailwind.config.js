module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screen: {
        'xs': '0px',
        'sm': '600px',
        'md': '960px',
        'lg': '1280px',
        'xl': '1920px'
      },
      spacing: {
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
        '156': '39rem',
        '168': '42rem',
        '180': '45rem',
        '204': '51rem',
      },
      colors: {
        'activeTab': '#E4D4F8'
      }
    },
  },
  variants: {
    extend: {
      padding: ['last']
    },
  },
  plugins: [],
}
