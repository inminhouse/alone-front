import React, {Component} from 'react';

import { inject, observer } from 'mobx-react';

import './custom.css'
//ui
import { 
  Container, 
  Menu,
  Card,
  List,
  Header,
  Image,
  Icon,
  Grid,
  Divider,
  Segment,
} from 'semantic-ui-react';

import { view } from '@/000_shared';

// import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Mypage from '../pages/Mypage';
import Myprofile from '../pages/Myprofile';
import Myschedule from '../pages/Myschedule';
import Payment from '../pages/Payment';

import pages from '../pages';


@inject('mypageStore')
@observer
export default class extends Component {

  constructor(props) {
    super(props);

    const { match, location, } = props;

    const matchPath = this.subSlice(match.path);

    const paths = this.subSlice(location.pathname).split('/');
    const id = paths[paths.length - 1];

    this.state = {
      pageInfo: matchPath !== id ? pages.find(x => x.as === id) : null
    }
  }

  subSlice = v => v.substring(1);

  componentDidMount() {
    this.props.mypageStore.findUserInfo();
  }

  createMenuItem = (arr, match, history) => arr.map((x, idx) => 
    <Menu.Item 
      key={idx}
      style={{padding: '1em'}}
      onClick={() => this.changePage(x, match, history)}
    >
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Icon name={x.icon} size="large" />
        <div style={{marginLeft: '1ex'}}>{x.name}</div>
      </div>
    </Menu.Item>
  );

  changePage = (v, m, h) => {
    h.push(`${m.path}/${v.as}`);
    this.setState({ pageInfo: v });
  }

  render() {
    const { pageInfo } = this.state

    const { location, match, history } = this.props;

    const { 

      // pageInfo,
      userInfo

    } = this.props.mypageStore;
    
    
    console.log(pageInfo);

    return (
      <Container id="main" style={{padding: '6em 0 2em 0'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Menu secondary vertical size='large' style={{padding: '0 1em'}}>
            <Menu.Item>
              <Header>마이페이지</Header>
            </Menu.Item>
            {this.createMenuItem(pages, match, history)}
            <Menu.Item 
              style={{padding: '1em'}}
              onClick={() => console.log("내 프로필 수정")}
            >
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='user times' size="large" />
                <div style={{marginLeft: '1ex'}}>
                  회원탈퇴
                </div>
              </div>
            </Menu.Item>
          </Menu>
          <div style={{height: 600, padding: '1em 3em', flexGrow: 1, boxShadow: '-1px 0 0 0 rgb(34 36 38 / 15%)', }}>
            {!pageInfo ? 
              <Mypage userInfo={userInfo}/> :  
              <pageInfo.Comp info={pageInfo} userInfo={userInfo}/>
            }
          </div>
        </div>
      </Container>
    )
  }
}