/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'very-dark-violet':'hsl(270, 9%, 17%)',
        'dark-violet': 'hsl(256, 26%, 20%)',
        
      }
    },
  },
  plugins: [],
}

