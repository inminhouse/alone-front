import React, {Component} from 'react';

import ChatHeader from './ChatHeader';
import ChatMsgList from './ChatMsgList';
import ChatBottom from './ChatBottom';

export default class extends Component {


  render() {

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
      </React.Fragment>
    )
  }
}

