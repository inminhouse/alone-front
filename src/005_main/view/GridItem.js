import React, {Component} from 'react';

import { Grid, Divider, Header, Segment, Item } from 'semantic-ui-react';

export default class extends Component {
  
  render() {

    const { header, items, } = this.props;
    console.log(header);
    return (
      <Segment>
        {header && <Header as='h1'>{header}</Header>}
        {header && <Divider />}
        <Grid >
          {items.map((x, idx) => (
            <React.Fragment>
              <Grid.Column key={idx + '-1'} mobile={16} tablet={8} computer={4}>
                <Item.Group>
                <Item>
                  {x.src && <Item.Image size='tiny' rounded src={x.src} /> }
                  <Item.Content>
                    <Item.Header as='a'>{x.header}</Item.Header>
                    <Item.Meta>{x.mata}</Item.Meta>
                    <Item.Extra>{x.extra}</Item.Extra>
                  </Item.Content>
                </Item>
                </Item.Group>
              </Grid.Column>
            </React.Fragment>
          ))}
        </Grid>
      </Segment>
    )
  }
}