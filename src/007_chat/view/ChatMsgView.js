import React, {Component} from 'react';

import ChatHeader from './ChatHeader';
import ChatMsgList from './ChatMsgList';
import ChatBottom from './ChatBottom';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { chatHeight: 500, }
  }

  componentDidMount() {
    this.setChatHeight()
  }

  setChatHeight = () => this.setState({ 
    chatHeight: 
      ['grid',  'top-menu', 
      // 'bottom-chat'
    ]
        .map(x => {
          const el = document.getElementById(x);
          return el ? el.clientHeight : 0;
        })
        .reduce((a,b) => a - b) + document.getElementById('bottom-chat').clientHeight
  });


  render() {

    const { chatHeight } = this.state;

    const { 
      chatInfo,
      msgList,
      msg,
      setMsg,
      sendMsg,
    } = this.props;

    return (
      <React.Fragment>
        <ChatHeader
          chatInfo={chatInfo}
        />
        <div
          style={{
            height: chatHeight, 
            display: 'grid',
            // flexDirection: 'column',
          }}
        >
          <ChatMsgList
            id="U001001"
            user={chatInfo.user}
            msgList={msgList}
          />
          <ChatBottom
            msg={msg}
            changeMsg={setMsg}
            sendMsg={sendMsg}
          />
        </div>
      </React.Fragment>
    )
  }
}

