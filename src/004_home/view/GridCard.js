import React, {Component} from 'react';

import { Grid, Divider, Header, Segment, Card, Image } from 'semantic-ui-react';

export default class extends Component {
  
  render() {

    const { header, items, } = this.props;
    
    return (
      <Segment>
        {header && <Header as='h1'>{header}</Header>}
        {header && <Divider />}
        <Grid >
          {items.map((x, idx) => (
            <React.Fragment>
              <Grid.Column key={idx + '-1'} mobile={16} tablet={8} computer={4}>
                <Card>
                  <Image src={x.src} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{x.header}</Card.Header>
                    <Card.Meta>
                      <span className='date'>{x.meta}</span>
                    </Card.Meta>
                    <Card.Description>
                      {x.extra}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </React.Fragment>
          ))}
        </Grid>
      </Segment>
    )
  }
}