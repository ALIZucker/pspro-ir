/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize:{
        'normal-text':'16px',
        'title-text':'24px',
        'big-title-text':'44px'
      },
      margin:{
        'margin-60px-vh':'9.831vh',
        'margin-20px-vw':'1.464vw',
        'margin-16px-vh':'2.457vw',
        'margin-16px-vw':' 1.171vw',
      },
      backgroundColor:{
        'primery':'#fff',
        'secender':'#f5f5f5',
      }
    },
  },
  plugins: [],
}
