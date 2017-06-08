module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: '#inline-source-map',
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
  },
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
