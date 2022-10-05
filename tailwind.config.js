/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Poppins', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage:{
        'mobile-shorten':`url('../public/images/bg-shorten-mobile.svg')`,
        'desktop-shorten':"url('../public/images/bg-shorten-desktop.svg')",
        'facebook':"url('../public/images/icon-facebook.svg')",
        'twitter':"url('../public/images/icon-twitter.svg')",
        'instagram':"url('../public/images/icon-instagram.svg')",
        'pintrest':"url('../public/images/icon-pinterest.svg')"
      }
    },
  },
  plugins: [],
}
