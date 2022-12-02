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
        brandyellow:"#FFB300",
        brandpurple:"#5D50C6",
        bodycopy:"#2F2F2F"
      }
    },
  },
  plugins: [],
}
