const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'source-map',
    optimization: {
      usedExports: true
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            // options: {
            //   // disable type checker - we will use it in fork plugin
            //   transpileOnly: true
            // }
          }
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new CleanWebpackPlugin(),
      // new CopyPlugin({
      //   patterns: [{ from: 'src/assets', to: 'assets' }]
      // }),
      // new ESLintPlugin({
      //   extensions: ['.tsx', '.ts', '.js'],
      //   exclude: 'node_modules',
      //   context: 'src'
      // })
    ]
  };