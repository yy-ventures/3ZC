module.exports = {
  plugins: [
    // require('postcss-modules')(),
    require('cssnano')(),
    require('postcss-preset-env')({
      autoprefixer: {},
    }),
    require('postcss-normalize')(),
  ],
};
