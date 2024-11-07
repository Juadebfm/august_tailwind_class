/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        job_cat_bg: "#161C2D",
        job_cat_box_blue: "#473BF0",
        job_cat_box_offwhite: "#E7E9ED",
        job_cat_explore: "#68D585",
        hrd_bg_col: "#68D5851A",
        bg_form_col: "#473BF0",
        border_col: "#E7E9ED",
        job_col_red: "#F64B4B",
        career_bg: "#F4F7FA",
        career_text_bg: "#FFFFFF",
        
      },
      fontFamily: {
        gilroy_regular: ["Gilroy_Regular", "sans-serif"],
        gilroy_medium: ["Gilroy_Medium", "sans-serif"],
        gilroy_semibold: ["Gilroy_Semibold", "sans-serif"],
        gilroy_bold: ["Gilroy_Bold", "sans-serif"],
        gilroy_black: ["Gilroy_Black", "sans-serif"],
        gilroy_light: ["Gilroy_Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};