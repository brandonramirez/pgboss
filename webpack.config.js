const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: './src/main/main.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }]
    },
    output: {
      path: path.resolve(__dirname, 'build/main'),
      filename: 'main.js'
    }
  },
  {
    entry: './src/renderer/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build/renderer'),
      filename: 'renderer-bundle.js',
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.json' ],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: ['ts-loader'], include: /src\/renderer/, exclude: /node_modules/ },
      ],
    },
    target: 'electron11-renderer',
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/renderer/index.html')
      })
    ]
  }
];
