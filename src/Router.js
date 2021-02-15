import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from './001_login';
import signUp from './002_signUp';
import main from './003_main';



export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={({match}) => {
        console.log(match);
        return (
          
          <Switch>
            <Route exact path={`${match.path}`} render={() => <main.Layout/>}/>
            <Route exact path={`${match.path}/login`} render={() => <login.Layout/>}/>
          </Switch>
        )
      }}/>
      {/* <Route exact path="/login" render={() => <login.Layout/>}/> */}
      <Route exact path="/signUp" render={() => <signUp.Layout/>}/>
      {/* <Route render={() => <login.Layout/>}/> */}
    </Switch>
  </Router>
);