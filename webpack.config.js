const path = require('path');
module.exports = {
  mode: 'production',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {test: /\.m?js$/, exclude: /(node_modules|bower_components)/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env']}}} ,
      //{test: /\.glsl$/, loader: 'webpack-glsl-loader'},
      //{test: /\.(frag|vert|glsl)$/, use: {loader: 'glsl-shader-loader', options: {}}}    
    ]
  }

  
  

}