// const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    require("postcss-import"),
    require("cssnano"),
    require("postcss-font-magician")({
      variants: {
        Poppins: {
          300: [],
          400: [],
          500: [],
          700: [],
        },
        Montserrat: {
          300: [],
          400: [],
          500: [],
          700: [],
        },
      },
      foundries: ["google"],
    }),
    require("postcss-preset-env")({ stage: 1 }),
    // purgecss({ content: ["./**/*.html", "./**/*.js"] }),
  ],
};
