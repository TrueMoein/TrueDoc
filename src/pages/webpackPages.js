const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = ['index', 'page2'];

module.exports = pages.map(page => {
  return new HtmlWebpackPlugin({
    template: `${__dirname}/${page}.html`,
    filename: `./${page}.html`
  })
});


