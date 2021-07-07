import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import axios from 'axios';

//ui
import { Button, Grid, Input, Header, Image, Message, Segment } from 'semantic-ui-react';
import { view } from '@/000_shared';

@inject('loginStore')
@observer
@withRouter
export default class extends Component {

  loginHref = (pvid) => 'http://localhost:8080/oauth2/authorize/' + pvid + '?redirect_uri=http://localhost:3333/oauth2/redirect';

  render() {

    const {auth} = this.props.loginStore;
    const {
      login,
    } = this.props.loginStore;
    
    // console.log(auth, view);
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/img/logo.png' /> 
            Log-in to your account
          </Header>
          <Segment stacked>
            {/* <view.IconElements
              icon="mail"
            >
              <Input 
                fluid 
                placeholder='E-mail address' 
              />
            </view.IconElements>
            <br/>
            <view.IconElements
              icon="lock"
            >
              <Input
                fluid
                placeholder='Password'
                type='password'
              />
            </view.IconElements>
            <br/> */}
            {/* <Segment>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>

            </Segment> */}
            {/* <Button 
              fluid 
              color='teal' 
              size='large'
              onClick = {this.login}
            >
              Login
            </Button> */}
            <a
              href={this.loginHref('naver')}
            >
              <img
                src="/img/naver/en/btnG_official.png"
                style={{width: "100%"}}
              />
            </a>
            <a
              href={this.loginHref('kakao')}
            >
              <img
                src="/img/kakao/en/kakao_login_large_narrow.png"
                style={{width: "100%"}}
              />
            </a>
            <a
              href={this.loginHref('google')}
            >
              <img
                src="/img/google/2x/btn_google_signin_light_normal_web@2x.png"
                style={{width: "100%"}}
              />
            </a>
            {/* <a
              className="ui teal large fluid button"
              href={'http://localhost:8080/oauth2/authorize/facebook?redirect_uri=' + 'http://localhost:3333/oauth2/redirect'}
            >
              Login
            </a> */}
          </Segment>
          {/* <Message>
            New to us? <Link to='/signUp'>Sign Up</Link>
          </Message> */}
        </Grid.Column>
      </Grid>
    )
  }
}