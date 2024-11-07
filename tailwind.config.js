/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        p_span: "#161C2D",
        job_cat_bg: "#161C2D",
        job_cat_box_blue: "#473BF0",
        job_cat_box_offwhite: "#E7E9ED",
        job_cat_explore: "#68D585",
        p_bg_man: " #68D585",
        p_red: " #F64B4B",
        p_fifth_sec: " #F4F7FA",
        p_white: "#fff",
      },
      backgroundImage: {
        p_header_img: ["BG(7).png"],
      },
      fontFamily: {
        gilroy_regular: ["Gilroy_Regular", "sans-serif"],
        gilroy_medium: ["Gilroy_Medium", "sans-serif"],
        gilroy_semibold: ["Gilroy_Semibold", "sans-serif"],
        gilroy_bold: ["Gilroy_Bold", "sans-serif"],
        gilroy_black: ["Gilroy_Black", "sans-serif"],
        gilroy_light: ["Gilroy_Light", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
