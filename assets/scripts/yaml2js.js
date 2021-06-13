const yaml = require('js-yaml');
const fs = require('fs');

module.exports = (path) => {
  try {
    return yaml.load(fs.readFileSync(path, 'utf8'));
  } catch (error) {
    throw error;
  }
};
