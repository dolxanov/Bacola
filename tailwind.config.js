/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    
    },
    extend: {
      backgroundImage:{
        'slider':"url('/image/slider.jpg')",   
        'banner':"url('/image/banner.jpg')",
        'fresh': "url('/image/fresh.jpg')",
        'legum': "url('/image/legumes.jpg')",
        'egg': "url('/image/egg.jpg')",

        
      },
      fontFamily:{
        'awesome':'"Font Awesome 5 Free"'
      }
    },
  },
  plugins: [],
}

