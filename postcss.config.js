// const postcss_modules = require('postcss-modules');
// const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss_preset_env = require('postcss-preset-env');
const postcss_normalize = require('postcss-normalize');

module.exports = {
  plugins: [
    // postcss_modules(),
    // autoprefixer(),
    cssnano(),
    postcss_preset_env({
      autoprefixer: {},
    }),
    postcss_normalize(),
  ],
};
