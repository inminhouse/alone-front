

require('dotenv').config({path: './config/.env.dev'});
console.log(process.env.NODE_ENV);
const webpack = require('webpack');
const path = require('path');

const WebpackDevServer = require('webpack-dev-server');

// import { renderToString } from 'react-dom/server';
// const domServer = require('react-dom/server');
// import { Helmet } from 'react-helmet';
// const reactHelmet = require('react-helmet');

const express = require('express');
// const next = require('next');//ssr 프레임워크
// const morgan = require('morgan');//로그 기록 미들웨어

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/webpack.config')(process.env);

const compiler = webpack(config);

// devServer
const devServer = new WebpackDevServer(compiler, config.devServer);
devServer.listen(3333, () => console.log('Example app listhening on port 3333!\n'));


//next
// const app = next({ dev: true }); // next 모듈을 사용
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express(); // back 서버에서의 const app = express()

//   server.use(morgan('dev'));
//   server.use(express.json());
//   server.use(express.urlencoded({ extended: true }));
//   // server.use(cookieParser(process.env.COOKIE_SECRET));
//   // server.use(
//   //   expressSession({
//   //     resave: false,
//   //     saveUninitialized: false,
//   //     secret: process.env.COOKIE_SECRET, // backend 서버와 같은 키를 써야한다.
//   //     cookie: {
//   //       httpOnly: true,
//   //       secure: false,
//   //     },
//   //   }),
//   // );
  
//   // server.get('/hashtag/:tag', (req, res) => {
//   //   return app.render(req, res, '/hashtag', { tag: req.params.tag });
//   // });

//   // server.get('/user/:id', (req, res) => {
//   //   return app.render(req, res, '/user', { id: req.params.id });
//   // });

//   server.get('*', (req, res) => { // 모든 get 요청 처리
//     return handle(req, res); // next의 get 요청 처리기
//   });

//   server.listen(3060, () => {
//     console.log('next+expresss running on port 3060');
//   });
// });



//express
// const app = express();
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }));
// app.use(webpackHotMiddleware(compiler));
// app.use(express.static('public'));




// app.get('*', (req, res) => {
//   const {ChunkExtractor} = require('@loadable/server');
//   // console.log(loadableServer);
//   // const nodeStats = path.resolve(__dirname, './node/loadable-stats.json');
//   // const webStats = path.resolve(__dirname, './web/loadable-stats.json');
//   const App = path.resolve(__dirname, './src/App.js');
//   // const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
//   // const { default: App } = nodeExtractor.requireEntrypoint();
//   // const webExtractor = new ChunkExtractor({ statsFile: webStats });

//   // const store = createStore(reducers);
//   // const context = {};

//   // const jsx = webExtractor.collectChunks(
//   //   <Provider store={store}>
//   //     <StaticRouter location={req.url} context={context}>
//   //       <App />
//   //     </StaticRouter>
//   //   </Provider>,
//   // );
//   const jsx = webExtractor.collectChunks(App);

//   const html = renderToString(jsx);
//   const helmet = Helmet.renderStatic();

//   res.set('content-type', 'text/html');
//   res.send(`
//     <!DOCTYPE html>
//       <html lang="en">
//         <head>
//           <meta name="viewport" content="width=device-width, user-scalable=no">
//           <meta name="google" content="notranslate">
//           ${helmet.title.toString()}
//           ${webExtractor.getLinkTags()}
//           ${webExtractor.getStyleTags()}
//         </head>
//         <body>
//           <div id="root">${html}</div>
//           ${webExtractor.getScriptTags()}
//         </body>
//       </html>
//   `);
// });

// app.listen(3333, () => console.log('Example app listhening on port 3333!\n'))