/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dm_sans: ["DM Sans", "sans-serif"],
        poppins: ["poppins", "san-serif"],
        
      },
      colors:{
        p_bg: "#2F1893"
        p_nav_btn: "#482BE7"
      }
    },
  },
  plugins: [],
}