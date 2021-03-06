import React, { Component } from 'react';

//ui
import { 
  Container, 
  Menu,
  Card,
  List,
  Header,
  Image,
  Icon,
  Grid,
  Divider,
  Segment,
} from 'semantic-ui-react';

export default class extends Component {

  render() {

    const { info, userInfo } = this.props;

    return (
      <React.Fragment>
        <Segment stacked>
          <Header as="h1">{info.name}</Header>
        </Segment>
        <Segment padded>
          <List>
            <List.Item as='a'>
              <Icon name='help' />
              <List.Content>
                <List.Header>Floated Icon</List.Header>
                <List.Description>
                  This text will always have a left margin to make sure it sits
                  alongside your icon
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item as='a'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>Icon Alignment</List.Header>
                <List.Description>
                  Floated icons are by default top aligned. To have an icon top aligned
                  try this example.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name='help' />
              Inline Text
            </List.Item>
          </List>
        </Segment>
      </React.Fragment>
    )
  }
}