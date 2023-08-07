/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*.{html,js}'
  ],
  content: ['./*.{html,js}'],
  theme: {
    screens: { 
      'sm': '640px',
      'md': '991px',
      'semiMd':'991px'
      }, 
      fontFamily: {
        lato: [ 'Lato', 'sans-serif'],
        oldstandard: [ 'Old Standard TT', 'sans-serif'],
      },
    extend: {
      colors:{
      'cream': '#f6eed2',
      'beige': 'rgb(97, 19, 19)'
    },
  },
  },
  plugins: [],
}

