import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Router from './Router';
import stores from './stores';

// import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
  <Provider {...stores}>
    <Router />
  </Provider>, 
  document.getElementById('root')
);