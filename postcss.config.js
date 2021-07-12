// const cssnano = require('cssnano');
const postcss_preset_env = require('postcss-preset-env');

module.exports = {
  plugins: [
    // cssnano(),
    postcss_preset_env({
      autoprefixer: {},
    }),
  ],
};
