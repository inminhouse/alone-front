import React, {Component} from 'react';

import {
  Container,
  Divider,
  Image,
  Button,
  Header,
  List,
  Menu,
  Icon,
  Popup,
  Segment,
} from 'semantic-ui-react';

export default class extends Component {

  state = {
    active: null
  }

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const popup = document.getElementsByClassName('popup transition visible');
    // console.log(popup, popup.length, popup.item(0).style.maxWidth);
    popup.item(0).style.maxWidth = 'none';
  }

  render() {
    
    const { active } = this.state;
    const { 
      list,
      saerchPartner,
    } = this.props;

    return (
      <List selection divided>
        {list.map((x, xidx) => (
          <List.Item 
            key={xidx}
            active={active === xidx} 
            onClick={() => this.setState({active: active === xidx ? null : xidx})}
          >
            <Image avatar src={x.img} />
            <List.Content>
              <List.Header>{x.title}</List.Header>
              {x.startDate + ' ~ ' + x.endDate}
            </List.Content>
            <List.Content floated='right'>
              <Button 
                circular 
                basic 
                icon={'search'} 
                onClick={e => saerchPartner(x)}
              />
            </List.Content>
            {active === xidx && 
              <List.List>
                {x.destination.map((y, yidx) => <List.Item key={yidx} style={{padding: '0 0 .5em 0'}}>{y}</List.Item>)}
              </List.List>
            }
          </List.Item>
        ))}
      </List>
    )
  }
}