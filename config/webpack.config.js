const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const nodeExternals = require('webpack-node-externals');
// const LoadablePlugin = require('@loadable/webpack-plugin');
//config
const devConfig = require('../config/webpack.dev')
const prodConfig = require('../config/webpack.prod')

const DEV = "development";
const PROD = "production";

module.exports = env => {


  const getEntry = env => {

    const entryPoint = [
      // path.resolve(__dirname, '../src/index.js'),
      path.resolve(__dirname, '../src'),
    ];

    if(env.NODE_ENV === DEV){
      // entryPoint.push('webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=20000&reload=true');
    }

    return entryPoint;
  }

  const babelPlugins = [
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
  ];

  if(env.NODE_ENV === DEV){
    // appEntry.push('react-hot-loader/patch');
    // babelPlugins.push('react-hot-loader/babel');
  }
  
  return {
    ...(env.NODE_ENV === DEV ? devConfig : prodConfig),
    mode: env.NODE_ENV,
    entry: {
      app: getEntry(env),
      vendor: [
        'semantic-ui-react',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
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
              '@babel/preset-react',
              // 'next/babel',
            ],
            plugins: babelPlugins
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
      // new LoadablePlugin(),
      // new webpack.HotModuleReplacementPlugin(), 
      new HtmlWebpackPlugin({
        title: 'Alone',
        filename: 'index.html',
        template:"public/index.html",
        favicon: 'public/favicon.ico',
      }),
    ],

    // externals: ['@loadable/component', nodeExternals()]
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