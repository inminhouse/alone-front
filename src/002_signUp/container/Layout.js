import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

//ui
import { Button, Grid, Input, Header, Image, Message, Segment } from 'semantic-ui-react';
import { view } from '@/000_shared';

@inject('signUpStore')
@observer
export default class extends Component {
  render() {

    const {auth} = this.props.signUpStore;
    
    // console.log(auth, view);
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/img/logo.png' /> 
            Sign-up
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
            <view.IconElements
              icon="lock"
            >
              <Input
                fluid
                placeholder='check Password'
                type='password'
              />
            </view.IconElements>
            <br/>
            <view.IconElements
              icon="lock"
            >
              <Input
                fluid
                placeholder='Name'
                type='password'
              />
            </view.IconElements>
            <br/>
            <view.IconElements
              icon="lock"
            >
              <Input
                fluid
                placeholder='Phone Number'
                type='password'
              />
            </view.IconElements>
            <br/>
            <Button color='teal' fluid size='large'>
              SignUp
            </Button>
          </Segment>
          <Message>
            <Link to='/'>Log-in</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}