import React, {Component} from 'react';

import { inject, observer } from 'mobx-react';

import './custom.css'
//ui
import { 
  Container, 
  Card,
  Header,
  Image,
  Icon,
  Grid,
  Divider,
} from 'semantic-ui-react';

import { view } from '@/000_shared';
// import ChatList from '../view/ChatList';
// import ChatMsgView from '../view/ChatMsgView';

@inject('searchStore', 'homeStore')
@observer
export default class extends Component {

  constructor(props) {
    super(props);
    console.log(window.outerHeight, window.innerHeight, window.outerWidth, window.innerWidth);

    // this.state = {
    //   menuWidth: this.setMenuWidth(window.innerWidth),
    // }

    // window.addEventListener('resize', () => {
    //   this.setState({ menuWidth : this.setMenuWidth(window.innerWidth) })
    //   this.setMainWidth();
    // })
  }

  componentDidMount() {

    // this.props.searchStore.findChatList();

    // this.props.searchStore.findChatHome();

    // this.setMainWidth();
  }

  // setMenuWidth = innerWidth => innerWidth > 1000 ? 300 : '8em';

  // setMainWidth = () => this.setState(
  //   { mainWidth: document.getElementById('main').clientWidth - document.getElementById('menu').clientWidth }
  // );
  
  saerchPartner = e => {
    console.log(e);
    this.props.homeStore.saerchPartner();
    // this.props.history.push('/search');
  }

  render() {
    // const { menuWidth, mainWidth } = this.state
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
    } = this.props.searchStore;
    
    const {
      schedule,
      changeDestination,
      changeStart,
      changeEnd,
      addSchedule,
    } = this.props.homeStore;

    console.log(msg);
    // console.log('이민상\n이민상');
    return (
      <Container id="main" style={{padding: '6em 0 2em 0'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{alignSelf: 'center'}}>

            <view.PartnerSearchForm 
              // vertical 
              inline={true}
              schedule={schedule}
              changeDestination={changeDestination}
              changeStart={changeStart}
              changeEnd={changeEnd}
              saerchPartner={this.saerchPartner}
            />
          </div>
          <Divider />
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card>
                <div className="ui image" style={{height: 250}}>
                  <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0jRCKpogcPjhf4qwBPAcKsQAzkniCK6nsA&usqp=CAU' 
                    style={{
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                {/* <Image as="div" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0jRCKpogcPjhf4qwBPAcKsQAzkniCK6nsA&usqp=CAU' wrapped /> */}
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card>
                
                <div className="ui image" style={{height: 250}}>
                  <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJORRbg4qlStrFWR1kBJKF7e1xjFQGP9AjQ&usqp=CAU' 
                    style={{
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>

        </div>
        {/* <Grid 
          id="grid" 
          columns={2} divided 
        > */}
          {/* <Grid.Column id="menu" style={{width: menuWidth}}>
            <ChatList
              chatList={chatList}
              searchChat={searchChat}
              activeId={chatInfo && chatInfo.chatId}
              folding={menuWidth === 300}
              changeSearchChat={setSearchChat}
              findChat={findChat}
            />
          </Grid.Column> */}

          {/* chating header */}
          {/* <Grid.Column style={{width: mainWidth}}>
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
          </Grid.Column> */}
        {/* </Grid> */}
      </Container>
    )
  }
}