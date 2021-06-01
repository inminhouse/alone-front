import React, {Component} from 'react';

import { inject, observer } from 'mobx-react';

import './custom.css'
//ui
import { 
  Container, 
  Header,
  Image,
  Icon,
  Grid,
} from 'semantic-ui-react';

import ChatList from '../view/ChatList';
import ChatMsgView from '../view/ChatMsgView';

@inject('chatStore')
@observer
export default class extends Component {

  constructor(props) {
    super(props);
    console.log(window.outerHeight, window.innerHeight, window.outerWidth, window.innerWidth);

    this.state = {
      menuWidth: this.setMenuWidth(window.innerWidth),
    }

    window.addEventListener('resize', () => {
      this.setState({ menuWidth : this.setMenuWidth(window.innerWidth) })
      this.setMainWidth();
    })
  }

  componentDidMount() {

    this.props.chatStore.findChatList();

    this.props.chatStore.findChatHome();

    this.setMainWidth();
  }

  setMenuWidth = innerWidth => innerWidth > 1000 ? 300 : '8em';

  setMainWidth = () => this.setState(
    { mainWidth: document.getElementById('main').clientWidth - document.getElementById('menu').clientWidth }
  );
  
  render() {
    const { menuWidth, mainWidth } = this.state
    const { 
      chatList,
      searchChat,
      chatHome,
      chatInfo,
      msgList,
      msg,


      findChat,
      sendMsg,
      
      setSearchChat,
      setMsg,
    } = this.props.chatStore;

    console.log(msg);
    // console.log('이민상\n이민상');
    return (
      <Container id="main" style={{padding: '6em 0 2em 0'}}>
        <Grid 
          id="grid" 
          columns={2} divided 
        >
          <Grid.Column id="menu" style={{width: menuWidth}}>
            <ChatList
              chatList={chatList}
              searchChat={searchChat}
              activeId={chatInfo && chatInfo.chatId}
              folding={menuWidth === 300}
              changeSearchChat={setSearchChat}
              findChat={findChat}
            />
          </Grid.Column>

          {/* chating header */}
          <Grid.Column style={{width: mainWidth}}>
            {chatInfo ? 
              <ChatMsgView 
                chatInfo={chatInfo}
                msgList={msgList}
                msg={msg}
                setMsg={setMsg}
                sendMsg={sendMsg}
              /> :
              chatHome ? 
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Header icon style={{margin: '1em'}}>
                    <Icon name={chatHome.icon} />
                    {chatHome.header}
                  </Header>
                  <Image src={chatHome.imgSrc}/>
                  <Header sub style={{margin: '1em'}}>
                    {chatHome.subHeader}
                  </Header>
                </div> :
                <div />
            }
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}