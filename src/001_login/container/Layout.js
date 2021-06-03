import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { inject, observer } from 'mobx-react';


// import google from 'googleapis';

//ui
import { Button, Grid, Input, Header, Image, Message, Segment } from 'semantic-ui-react';
import { view } from '@/000_shared';

@inject('loginStore')
@observer
@withRouter
export default class extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }

  login = async () => {
    await this.props.loginStore.login();
    console.log(this.props.history);
    // this.props.history.push('/');
    // const {google} = require('googleapis');
    // const oauth2Client = new google.auth.OAuth2(
    //   "249234000259-b3s54mj0sfmeesulgr4rlok9c8dce81i.apps.googleusercontent.com",
    //   "-CvspwINwfAY24t7K7YTwAML",
    //   "http://localhost:3333"
    // );

    // const scopes = [
    //   "https://www.googleapis.com/auth/poeple",
    //   'https://www.googleapis.com/auth/calendar'
    // ];

    // const url = oauth2Client.generateAuthUrl({
    //   // 'online' (default) or 'offline' (gets refresh_token)
    //   access_type: 'offline',
    
    //   // If you only need one scope you can pass it as a string
    //   scope: scopes
    // });

  }

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
            <view.IconElements
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
            <br/>
            {/* <Segment>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>

            </Segment> */}
            <Button 
              fluid 
              color='teal' 
              size='large'
              onClick = {this.login}
            >
              Login
            </Button>
          </Segment>
          <Message>
            New to us? <Link to='/signUp'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}