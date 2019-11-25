var path = require('path');

module.exports = {
  entry: './fancy-weather/app/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './fancy-weather/dist')
  }
};