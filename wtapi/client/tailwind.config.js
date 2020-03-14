const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Suez One", ...defaultTheme.fontFamily.serif],
      }
    },
  },
  variants: {},
  plugins: [],
}



