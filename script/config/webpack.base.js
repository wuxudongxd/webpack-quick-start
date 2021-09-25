const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { appIndex, appHtml } = require('../paths');
const { isDevelopment, isProduction } = require('../environment');
const { imageInlineSizeLimit } = require('../config');

const getCssLoaders = () => [
  isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      sourceMap: isDevelopment,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          // eslint-disable-next-line global-require
          require('postcss-flexbugs-fixes'),
          isProduction && [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true,
                flexbox: 'no-2009',
              },
              stage: 3,
            },
          ],
        ].filter(Boolean),
      },
    },
  },
];

module.exports = {
  entry: {
    app: appIndex,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCssLoaders(),
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: imageInlineSizeLimit,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: appHtml,
      cache: true,
    }),
    new MiniCssExtractPlugin(),
  ],
};
