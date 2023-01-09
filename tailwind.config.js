/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ["Courier New", "monospace"],
    },
    extend: {
     backgroundImage:{
      'wrinkledpaper':"url('.src/components/wrinkledpaperbackground.webp')",
      'yellowruledpaper':"url('./components/yellowruledpaper.webp')",
     }
    },
  },
  plugins: [],
}

// backgroundImage:{'wrinkledpaper': "url('/images/wrinkledpaperbackground.webp')",
//src/components/Footer.js