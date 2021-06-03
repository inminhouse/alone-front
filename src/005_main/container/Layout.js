import React, {Component} from 'react';

import { inject, observer } from 'mobx-react';
import axios from 'axios';

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

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import NoMatch from '../../000_shared/container/NoMatch';
import Home from '../../006_home/container/Layout';
import Chat from '../../007_chat/container/Layout';
import Search from '../../008_search';
import Mypage from '../../009_mypage';


import ScheduleList from '../view/ScheduleList';
import ScheduleRegister from '../view/ScheduleRegister';
import Bottom from '../view/Bottom';
import { view } from '@/000_shared';

//순서 중요
@inject('mainStore')
@observer
export default class extends Component {
  
  constructor(props) {
    super(props);
    console.log(props.location.pathname);
    this.state = {
      activeUrl: props.location.pathname
    }
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.mainStore.findScheduleList();
  }

  render() {

    // const { match, history } = this.props;
    const { activeUrl } = this.state;

    const {
      schedule,
      scheduleList,
      changeStart,
      changeEnd,
      addSchedule,
      saerchPartner,
      addDestination,
      changeDestination,
    } = this.props.mainStore;
    
    return (
      <div>
        
        <Menu 
          inverted 
          borderless 
          fixed='top' 
          ref={ref => this.menuRef = ref} 
          style={{
            background: 
              'linear-gradient(' 
              + 'to top, ' 
              + 'rgba(0, 0, 0, 0) 0%, ' 
              + 'rgba(20, 20, 20, 0.05) 10%, ' 
              + 'rgba(20, 20, 20, 0.12) 25%, ' 
              + 'rgba(20, 20, 20, 0.25) 40%, ' 
              + 'rgba(20, 20, 20, 0.5) 55%, ' 
              + 'rgba(20, 20, 20, 0.75) 75%, ' 
              + 'rgba(20, 20, 20, 1) 100%)',
          }}
        >
          <Container>
            <Menu.Item header style={{borderLeft: 0}}>
              ALONE
            </Menu.Item>

            <Menu.Item 
              position='right' 
              as='a' 
              href="/"
              active={activeUrl === '/'}
            >
              <Icon name='home' style={{margin: 0}}/>  
            </Menu.Item>
            
            <Popup
              on='click'
              trigger={
                <Menu.Item as='a' >
                  <Icon name='add circle' style={{margin: 0}}/>  
                </Menu.Item>
              }
            >
              <Popup.Content>
                <ScheduleRegister 
                  schedule={schedule}
                  addDestination={addDestination}
                  changeDestination={changeDestination}
                />
              </Popup.Content>
            </Popup>
            
            <Popup
              on='click'
              trigger={
                <Menu.Item as='a' >
                  <Icon name='list ul' style={{margin: 0}}/>  
                </Menu.Item>
              }
            >
              <Popup.Content>
                <ScheduleList
                  list={scheduleList}
                  saerchPartner={saerchPartner}
                />
              </Popup.Content>
            </Popup>
            <Menu.Item 
              as='a' 
              href="/chat"
              active={activeUrl === '/chat'}
            >
              <Icon name='chat' style={{margin: 0}}/>
            </Menu.Item>
            <Menu.Item 
              as='a' 
              href="/mypage"
              active={activeUrl === '/mypage'}
            >
              <Image src='/img/logo.png' avatar />
            </Menu.Item>
          </Container>
        </Menu>
        
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />}/>
            <Route exact path="/chat" render={() => <Chat />}/>
            <Route exact path="/search" render={() => <Search />}/>
            <Route path="/mypage" render={props => <Mypage {...props}/>}/>
            <Route render={() => <NoMatch/>}/>
          </Switch>
        </Router>

        <Bottom />

      </div>
    );
  }
}
