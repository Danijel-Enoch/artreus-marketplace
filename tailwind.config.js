/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandbrown:"#422E21",
        brandyellow:"#FFB300"
        
      }
    },
  },
  plugins: [],
}
