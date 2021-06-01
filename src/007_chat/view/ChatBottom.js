import React, {Component} from 'react';

//ui
import { 
  Icon,
  Button,
  Menu,
} from 'semantic-ui-react';

export default class extends Component {

  onChange = () => this.props.changeMsg(document.getElementById('msgText').value);
  
  findLn = (msg, cnt = 1) => 
    cnt < 3 && msg.indexOf('\n') > -1 ? 
      this.findLn(msg.substring(msg.indexOf('\n') + 1), cnt + 1) : 
      cnt;

  render() {

    const {
      msg,
      sendMsg,
    } = this.props;
    
    return (
      <Menu 
        id="bottom-chat"
        secondary 
        style={{
          borderTop: '2px solid rgba(34,36,38,.15)', 
          margin: 0,
          paddingTop: '1em',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Menu.Item 
          style={{
            padding: '.5em', 
            margin: 0,
            alignSelf: 'flex-end',
          }}
        >
          <Button basic icon circular onClick={() => sendMsg()}>
            <Icon name='plus' size="large" style={{color: 'darkgrey', margin: 0}}/>
          </Button>
        </Menu.Item>
        <Menu.Item
          style={{
            flexGrow: 1, 
            padding: 0,
          }}
        >
          <div />
          <div className="ui form" style={{width: '100%'}}>
            <textarea 
              id="msgText"
              rows={this.findLn(msg)}
              style={{
                padding: '1ex',
                fontSize: 'medium', 
                borderRadius: '1ex', 
                resize: 'none',
                alignSelf: 'flex-end',
              }}
              value={msg}
              onChange={(e,d) => this.onChange()}
            />
          </div>

        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item 
            style={{
              padding: '.5em',
              alignSelf: 'flex-end',
            }}
          >
            <Button basic icon circular onClick={() => sendMsg()}>
              <Icon name='send' size="large" style={{color: 'darkgrey', margin: 0}}/>
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}