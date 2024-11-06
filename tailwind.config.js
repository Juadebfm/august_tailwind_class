/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header_bg_color: "#68D5851A",
        js_blue: "#473BF0",
        js_deep_blue: "#161C2D",
        js_green: "#68D585",
        js_red: "#F64B4B",
        js_bg2: "#F4F7FA",
        js_offwhite:"#E7E9ED"
      },
      fontFamily: {
        gilroy_regular: ["Gilroy_Regular", "sans-serif"],
        gilroy_medium: ["Gilroy_Medium", "sans-serif"],
        gilroy_semibold: ["Gilroy_Semibold", "sans-serif"],
        gilroy_bold: ["Gilroy_Bold", "sans-serif"],
        gilroy_black: ["Gilroy_Black", "sans-serif"],
        gilroy_light: ["Gilroy_Light", "sans-serif"]
      },
    }
  },
  plugins: []
};
