import React, { Component } from 'react';

// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import axios from 'axios';

import { container } from './000_shared';
import login from './001_login';
import signUp from './002_signUp';
import main from './005_main';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      step: 0,
      loading: false
    }
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {

    this.setState({
      loading: true,
      step: 1
    });
    
    const token = localStorage.getItem("accessToken");

    //token이 있으면 일단 조회 날린다
    if(token) {
      axios.get("/api/user/me", {headers: {Authorization: "Bearer " + token}})
        .then(({data}) => {
          this.setState({
            userInfo: data,
            step: 2,
            loading: false,
          });
        })
        .catch(err => {
          
          console.error(err);
          console.log(err.response  );
          //back 접근 error 시 localStorage 비우기
          localStorage.clear();
          this.setState({ loading: false, step: 2, });
        });
    }
    else {
      this.setState({ loading: false, step: 2, });
    }
  }

  render() {
    
    const {
      userInfo,
      step,
      loading,
    } = this.state;

    if(loading) {
      return (
        <Router>
          <container.Loader />
        </Router>
      )
    }

    /**
     * route 들어오면 token 있는지 파악
     * > 있으면 userInfo 가져오기 시도
     * >> userInfo 가져오기 성공 > userInfo 세팅
     * >> userInfo 가져오기 실패 > error 확인
     * > 없으면 그대로 넘어감
     */
    return (
      <Router>
        <Switch>
          {
            /**
             * '/login'으로 접속 시도
             * > token 기반으로 가져온 userInfo 세팅 확인
             * >> 있으면 '/' main으로 redirect
             * > 문제 없을 시 login page
             */
          }
          <Route 
            path="/login" 
            render={props => {
              console.log(userInfo);
              return userInfo ? <Redirect to={{pathname: '/', state: { from: props.location }}} /> : <login.Layout {...props}/>
            }}
          />
          {
            /**
             * '/signUp'으로 접속 시도
             * > token 기반으로 가져온 userInfo 세팅 확인
             * >> 있으면 '/' main으로 redirect
             * > 문제 없을 시 signUp page
             */
          }
          <Route 
            path="/signUp" 
            render={props => {
              console.log('signUp?', userInfo);

              if(step === 2 && userInfo && localStorage.getItem('status') === 'E') {
                return <Redirect to={{pathname: '/', state: { from: props.location }}} />
              }
              
              return <signUp.Layout {...props} userInfo={userInfo}/>
            }}
          />
          <Route sensitive path="/oauth2/redirect" component={container.OAuth2RedirectHandler} />
          <Route path="/noMatch" component={container.NoMatch} />
          {
            /**
             * 상단의 Route에 정의된 path 외에 모든 접속 시도
             * > 정확한 root주소가 아니고, accessToken이 없고, userInfo 세팅이 없다면
             * >> '/noMatch'로 redirect
             * > root주소 접근이면서 token이 없거나 userInfo 조회 단계 이후 userInfo가 없다면
             * >> localStorage 비우고, /login 페이지로 redirect
             * > 문제 없을 시 main page
             */
          }
          <Route 
            strict
            path="/" 
            render={props => {
              const {
                location,
                match,
              } = props;
              
              if(!match.isExact && !localStorage.getItem("accessToken") && !userInfo) {
                return <Redirect to={{pathname: '/noMatch', state: { from: location }}} />
              }

              if((match.isExact && !localStorage.getItem("accessToken")) || (step === 2 && !userInfo)){
                localStorage.clear();
                return <Redirect to={{pathname: '/login', state: { from: location }}} />
              }

              return <main.Layout {...props} userInfo={userInfo} />
            }}
          />
        </Switch>
      </Router>
    )
  }
};