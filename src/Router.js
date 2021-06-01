import React from 'react';

// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import login from './001_login';
import signUp from './002_signUp';
import main from './005_main';

export default () => (
  <Router>
    <Switch>
      <Route path="/signUp" render={() => <signUp.Layout/>}/>
      <Route path="/login" render={() => <login.Layout/>}/>
      <Route path="/" render={props => {
        localStorage.getItem("sessionID") || props.history.push(`${props.match.path}login`);
        return <main.Layout {...props} />
      }}/>
    </Switch>
  </Router>
);