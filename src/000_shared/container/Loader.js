import React, {Component} from 'react';

import { Grid, Loader } from 'semantic-ui-react'

export default class extends Component {

  render() {
    return (
      <Grid style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column>
          <Loader active inline='centered'/>
        </Grid.Column>
      </Grid>
    )
  }
}