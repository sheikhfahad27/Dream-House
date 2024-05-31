/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'House': "url('./src/assets/Group 7.png')",
'launch' :"url('./src/assets/image 20.png')"

      }
    },
  },
  plugins: [],
}