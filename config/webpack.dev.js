const createIframe = require("node-iframe");
const axios = require("axios");

const proxy = {
  '/api': {
    target: 'http://localhost:3000',
    pathRewrite: {'/api': '/'}
  }
};

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    historyApiFallback: true,
    publicPath: '/',
    contentBase: './public',
    overlay: true,
    stats: {//웹팩의 상태값에 색상을 부여한다.
      colors: true
    },
    proxy: {
      '/api3001': {
        target: 'http://localhost:3001',
        pathRewrite: {'/api3001': ''}
      },
      
      '/api3000': {
        target: 'http://localhost:3000',
        pathRewrite: {'/api3000': '/'}
      },
    },
    // after: function(app, server, compiler) {
    //   app.use('/api3001', () => {
    //     console.log('after');
    //   })
    // },
    // before: function(app, server, compiler) {
    //   app.use('/api3001', (req, res, next) => {
    //     console.log('before');
    //     console.log(next);
    //     axios.get('http://localhost:3001')
    //       .then(r => {
    //         // console.log("r", r);
    //         // console.log("e?", r.request.socket._httpMessage);
    //         // console.log(res);
    //         // const rrr = JSON.stringify(r, getCircularReplacer());
    //         r.request.socket._httpMessage = JSON.stringify(r.request.socket._httpMessage, getCircularReplacer());
    //         console.log('================================================');
    //         // console.log('rrr: ', rrr);
    //         console.log('r', r);
    //         console.log('================================================');
    //         res.send(r)
    //       })
    //       .catch(e => {
    //         console.log("e", e);
    //       });
    //       next();
    //     // res.json({r: 'rr'})
    //   })
    // },

    // before: (app, server, compiler) => {
    //   console.log(createIframe);
    //   // app.use(createIframe);
    //   app.get('/api', (req, res) => {
    //     res.createIframe({
    //       url: proxy.target,
    //       baseHref: req.query.baseHref,
    //       config: {cors: {script: true}}
    //     })
    //     // const re = [];
    //     // req.get('http://erel.kr/bbs/board.php?bo_table=study&wr_id=93&sca=Html%2FCSS%2FScript&page=2', {
    //     //   headers: {'content-type': 'application/json'},
    //     //   url: 'http://erel.kr/bbs/board.php?bo_table=study&wr_id=93&sca=Html%2FCSS%2FScript&page=2',
    //     //   json: true,
    //     // }, function(e, r, b) {
    //     //   console.log(e, b);
    //     //   // r.json(b)
    //     //   re.push(b);
    //     // })
    //     // console.log(re);
    //     // // console.log('after: /api');
    //     // // console.log(req, )
    //     // // req.url = 'http://erel.kr/bbs/board.php?bo_table=study&wr_id=93&sca=Html%2FCSS%2FScript&page=2'
    //     // // res
    //     // res.send('??')
    //   });
    // },
  }
}