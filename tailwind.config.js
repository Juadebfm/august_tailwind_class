/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dm_sans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        p_bg: "#2F1893",
        p_nav_btn: "#482BE7",
        p_hero_btn: "#25DAC5",
      },
    },
  },
  plugins: [],
};
