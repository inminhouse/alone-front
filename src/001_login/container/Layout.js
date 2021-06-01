import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

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
    this.props.history.push('/');
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