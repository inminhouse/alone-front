import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';

// import { loadableReady } from '@loadable/component';
import { hydrate } from 'react-dom';

import App from './App';
// import Router from './Router';
// import stores from './stores';

// import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.min.css';

//csr
ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);

//ssr
//hydrate: ssr을 위해 ReactDOM.render 대신 사용하는 함수
//loadableReady: code-splitting 한 컴포넌트 렌더를 위한 ssr전용 함수
// loadableReady(() => {
//   hydrate(
//     <App/>, 
//     document.getElementById('root')
//   );
// });

//hmr
if (module.hot) {
  module.hot.accept();
}