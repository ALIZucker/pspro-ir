/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize:{
        'normal-text':'12px',
        'title-text':'20px'
      },
      margin:{
        'margin-20px-vh':'3.072vh',
        'margin-20px-vw':'1.464vw',
        'margin-16px-vh':'2.457vw',
        'margin-16px-vw':' 1.171vw',
      }
    },
  },
  plugins: [],
}
