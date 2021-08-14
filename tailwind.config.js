const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        cyan: colors.cyan,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
