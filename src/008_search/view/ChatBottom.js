import React, {Component} from 'react';

//ui
import { 
  Icon,
  Button,
  Menu,
} from 'semantic-ui-react';

export default class extends Component {

  onChange = () => this.props.changeMsg(document.getElementById('msgText').value);

  render() {

    const {
      msg,
      sendMsg,
    } = this.props;
    
    return (
      <Menu 
        id="bottom-chat"
        secondary 
        style={{borderTop: '2px solid rgba(34,36,38,.15)', margin: 0}}
      >
        <Menu.Item style={{padding: '.5em', margin: 0}}>
          <Icon name='plus circle' size="large" style={{color: 'darkgrey', margin: 0}}/>
        </Menu.Item>
        <Menu.Item
          style={{flexGrow: 1, padding: '1em 0 1em 0'}}
        >
          <div className="ui form" style={{width: '100%'}}>
            <textarea 
              id="msgText"
              rows={3}
              style={{borderRadius: '1em',}}
              value={msg}
              onChange={(e,d) => this.onChange()}
            />
          </div>

        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item style={{padding: '.5em'}}>
            <Button icon onClick={() => sendMsg()}>
              <Icon name='send' size="large" style={{color: 'darkgrey', margin: 0}}/>
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}