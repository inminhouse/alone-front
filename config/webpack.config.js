const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    mode: env.NODE_ENV,
    entry: {
      app: [
        path.resolve(__dirname, '../src/index.js'),
      ],
      vendor: [
        'semantic-ui-react',
      //   // 'semantic-ui-css',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'dist/[name].[contenthash].js',
      chunkFilename: 'dist/[name].[contenthash].js',
    },
    resolve: {
      modules: [
        'node_modules'
      ],
      extensions: ['*', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, '../src')
      }
    },
    
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: ['/node_modules'],
          options: {
            compact: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {node: 'current'},
                  modules: false,
                }
              ],
              "@babel/preset-react",
            ],
            plugins: [
              "@babel/plugin-proposal-async-generator-functions",
              //@babel/plugin-proposal-decorators 이후 @babel/plugin-proposal-class-properties 순서
              ["@babel/plugin-proposal-decorators", {"legacy": true}],
              ["@babel/plugin-proposal-class-properties", {"loose": true}],
              "@babel/plugin-proposal-json-strings",
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-syntax-async-generators",
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-syntax-import-meta",
              "@babel/plugin-transform-arrow-functions",
              "@babel/plugin-transform-async-to-generator",
              "@babel/plugin-transform-react-constant-elements",
              "@babel/plugin-transform-runtime",
              "react-hot-loader/babel",
            ]
          },
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader', 
            {
              loader: 'css-loader',
              options: {
                // modules: true, 
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(ico|png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'url-loader',
          options: {
            name: '[name][hash].[ext]',
            limit: 100000,
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'file-loader',
          options: {
            name: '[name][hash].[ext]',
          }
        },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Alone',
        filename: 'index.html',
        template:"./public/index.html",
        favicon: './public/favicon.ico',
        // inject: true
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    
    // optimization: {
    //   splitChunks: {
    //     minSize: {
    //       javascript: 30000,
    //       style: 50000,
    //     },
    //     chunks: "all",
    //     cacheGroups: {
    //       vendor: {
    //         chunks: "all",
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'vendors',
    //       },
    //       common: {
    //         chunks: "all",
    //         test: /[\\/]src[\\/]js[\\/]/,
    //         name: "common",
    //         // minChunks: 1,
    //         // maxInitialRequests: 5,
    //         // minSize: 0,
    //         // priority: 1
    //       }
    //     },
    //   },
    // },
  }
}