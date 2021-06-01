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
  Item,
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
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Item.Content>
                <Item.Header as='a'>Header</Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Item.Content>
                <Item.Header as='a'>Header</Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </React.Fragment>
    )
  }
}