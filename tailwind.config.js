/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
    theme: {
      screens: {
        // adding xs to the rest
        xs: "1px",
        // if you did not add this, you would have only "xs"
        ...defaultTheme.screens,
      },
      fontFamily: {
        content : ["Roboto", "sans-serif"],
        logo :["Noto Sans", "sans-serif"]
      },
  },


  plugins: [],
}