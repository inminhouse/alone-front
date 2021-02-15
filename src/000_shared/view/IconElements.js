import React, { Component } from 'react';
//ui
import { Grid, Icon, } from 'semantic-ui-react'

export default class Layout extends Component {

  render() {

    const {icon, children} = this.props;

    return (
      <Grid columns='equal' verticalAlign='middle'>
        <Grid.Column width={1}>
          <Icon disabled name={icon}/>
        </Grid.Column>
        <Grid.Column>
          {children}
        </Grid.Column>
      </Grid>
    )
  }
}