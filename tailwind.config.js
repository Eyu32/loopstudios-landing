/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'Alata':'"Alata", sans-serif',
        'Josefin-sans': '"Josefin Sans", sans-serif'
      },
      backgroundImage:{
        'hero-mobile': "url('./images/image-mobile-hero.jpg')",
        'hero-desktop': "url('./images/image-desktop-hero.jpg')"
      },
      colors: {
        'Dark-Gary': 'hsl(0, 0%, 55%)',
        'Very-Dark-Gary': 'hsl(0, 0%, 41%)'
      },
      width:{
        '104': '36rem',
        '112': '32rem'
      }

    },
  },
  plugins: [],
}

