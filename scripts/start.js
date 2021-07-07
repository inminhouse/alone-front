

require('dotenv').config({path: './config/.env.dev'});
console.log(process.env.NODE_ENV);
const webpack = require('webpack');
const path = require('path');

const WebpackDevServer = require('webpack-dev-server');

// const express = require('express');

// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/webpack.config')(process.env);

const compiler = webpack(config);

// devServer
const devServer = new WebpackDevServer(compiler, config.devServer);
devServer.listen(3333, () => console.log('Example app listhening on port 3333!\n'));





//express
// const app = express();
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }));
// app.use(webpackHotMiddleware(compiler));
// app.use(express.static('public'));
// app.listen(3333, () => console.log('Example app listhening on port 3333!\n'))