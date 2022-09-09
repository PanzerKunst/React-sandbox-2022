const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const DIST_DIR = path.resolve(__dirname, 'build');
const ASSETS_DIR = 'assets';

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.tsx'),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: SRC_DIR,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: { modules: { mode: 'icss' } },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|woff2|woff|ttf)$/i,
        type: 'asset/resource',
        generator: { filename: `${path.resolve(SRC_DIR, ASSETS_DIR)}/fonts/[name]-[contenthash][ext]` },
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        type: 'asset/resource',
        generator: { filename: `${path.resolve(SRC_DIR, ASSETS_DIR)}/images/[name]-[contenthash][ext]` },
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  output: {
    path: DIST_DIR,
    filename: `${ASSETS_DIR}/scripts/[name].[chunkhash].js`,
    clean: true,
  },

  plugins: [
    new HtmlPlugin({ template: path.resolve(PUBLIC_DIR, 'index.html') }),
    new CopyPlugin({
      patterns: [
        {
          from: PUBLIC_DIR,
          globOptions: { ignore: ['**/index.html'] },
          to: DIST_DIR,
        },
      ],
    }),
    new ESLintPlugin({
      context: SRC_DIR,
      extensions: ['.ts', '.tsx', '.js'],
    }),
    new StylelintPlugin({
      context: SRC_DIR,
      files: '**/*.scss',
    }),
  ],

  devServer: {
    host: 'localhost',
    client: { logging: 'info' },
    historyApiFallback: { index: '/index.html' },
    hot: true,
  },
};
