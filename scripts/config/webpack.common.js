const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PostCssImport = require('postcss-import')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackBar = require('webpackbar')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const { ENV, IS_PROD, PROJECT_DIR, SOURCE_DIR, CLIENT_DIR } = require('../constants')

module.exports = {
  mode: ENV,
  entry: {
    app: path.resolve(SOURCE_DIR, './index.tsx'),
  },
  output: {
    path: CLIENT_DIR,
    filename: 'js/[name].[hash:8].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': SOURCE_DIR,
      '@comps': path.resolve(SOURCE_DIR, './components'),
      '@utils': path.resolve(SOURCE_DIR, './utils'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
    },
    minimizer: [IS_PROD && new OptimizeCssAssetsPlugin()].filter(Boolean),
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          IS_PROD
            ? MiniCssExtractPlugin.loader
            : {
                loader: 'style-loader',
                options: {
                  injectType: 'singletonStyleTag',
                },
              },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-preset-env')({
                    autoprefixer: {
                      grid: true,
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  }),
                  require('postcss-normalize'),
                ],
                // plugins: loader => {
                //   PostCssImport({ root: loader.resourcePath })
                // },
                sourceMap: !IS_PROD,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [SOURCE_DIR],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: loader => {
                  PostCssImport({ root: loader.resourcePath })
                },
                sourceMap: IS_PROD,
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: loader => {
                  PostCssImport({ root: loader.resourcePath })
                },
                sourceMap: false,
              },
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_DIR, './public/index.ejs'),
      title: 'React Instagram',
      filename: 'index.html',
      cache: false,
      minify: IS_PROD
        ? {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
          }
        : false,
    }),
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(PROJECT_DIR, './public'),
          from: 'favicon.ico',
          to: CLIENT_DIR,
          toType: 'dir',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[id].style.css',
    }),
    new WebpackBar(),
  ],
}
