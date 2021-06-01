import React, {Component} from 'react';
import { Link, } from 'react-router-dom';

import { Button, Grid, Header, Message, Segment } from 'semantic-ui-react';

export default class extends Component {

  render() {
    
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' color='teal' textAlign='center'>
            NOT FOUND
          </Header>
          <Segment stacked>
          <Message>
            The Page you requested could not found
          </Message>
          <Link to="/">
            <Button
              fluid
              color='teal' 
              size='large'
            >
              Go Home
            </Button>
          </Link>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}