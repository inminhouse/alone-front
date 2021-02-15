
process.env.NODE_ENV = 'development';

const WebpackDevServer = require('webpack-dev-server');
const express = require('express');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// const app = webpackDevServer();
const config = merge(
  require('../config/webpack.config')(process.env), 
  require('../config/webpack.dev')
);

const compiler = webpack(config);

// console.log(config);

// devServer
// const devServer = new WebpackDevServer(compiler, config.devServer);
// devServer.listen(3333, () => console.log('Example app listhening on port 3333!\n'));

//express
const app = express();
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(express.static('public'));
app.listen(3333, () => console.log('Example app listhening on port 3333!\n'))