import React, {Component} from 'react';

//ui
import { 
  Icon,
  Image,
  Menu,
} from 'semantic-ui-react';

export default class extends Component {

  render() {

    const {
      chatInfo,
    } = this.props;
    
    return (
      <Menu id="top-menu" pointing secondary style={{height: '6em', margin: 0}}>
        <Menu.Item>
          <Image 
            avatar 
            src={chatInfo.chatImg}
            style={{width: '4em', height: '100%'}}
          />
          <span style={{paddingLeft: '1ex', fontWeight: 700, fontSize: '3ex'}}>
            {chatInfo.chatName}
          </span>
          
        </Menu.Item>
        <Menu.Menu position='right' style={{alignSelf: 'center'}}>
          <Menu.Item 
            onClick={this.handleItemClick}
            style={{padding: '.5em'}}
          >
            <Icon 
              name='star' 
              size="large" 
              color={chatInfo.status.find(x => x === 'bookmark') ? 'yellow' : 'grey'} 
              style={{margin: 0}}
            />
          </Menu.Item>
          <Menu.Item 
            onClick={this.handleItemClick}
            style={{padding: '.5em'}}
          >
            <Icon 
              name={chatInfo.status.find(x => x === 'bell slash') || 'bell'}
              size="large" 
              color="grey" 
              style={{margin: 0}}
            />
          </Menu.Item>
          <Menu.Item
            onClick={this.handleItemClick}
            style={{padding: '.5em'}}
          >
            <Icon 
              name='ellipsis horizontal' 
              size="large" 
              color="grey" 
              style={{margin: 0}}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}