/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hoverColor:'#FFC000',
        brightColor:'#dd8036',
        backgroudColor:'#36ae9a',
      }
    },
  },
  plugins: [],
}

