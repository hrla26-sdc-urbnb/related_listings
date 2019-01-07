var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  
  module : {
    rules : [
      {
        test : /\.js[x]?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
       }
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
    },
    {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]',
        },
    },
    ]
  }
};
