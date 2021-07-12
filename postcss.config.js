const postcss_preset_env = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcss_preset_env(),
    cssnano(),
  ],
};
