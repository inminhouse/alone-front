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

  }

  componentDidMount() {

    this.props.searchStore.findScheduleChatList();
  }
  
  saerchPartner = e => {
    console.log(e);
    this.props.homeStore.saerchPartner();
    // this.props.history.push('/search');
  }

  createScheduleChatList = l => l.map((x, idx) => {
    const column = {mobile: 16, tablet: 8, computer: 4};
    return (
      <Grid.Column {...column} key={idx}>
        <Card>
          <div className="ui image" style={{height: 250}}>
            <img 
              src={x.chatImg}
              style={{
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <Card.Content>
            <Card.Header>{x.name}</Card.Header>
            <Card.Meta>{x.startDate + ' ~ ' + x.endDate}</Card.Meta>
            <Card.Description>{x.introduce}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {x.participant + 'Friends'}
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  })

  render() {
    // const { menuWidth, mainWidth } = this.state
    const {
      scheduleChatList,
    } = this.props.searchStore;
    
    const {
      schedule,
      changeDestination,
      changeStart,
      changeEnd,
      addSchedule,
    } = this.props.homeStore;

    // console.log(msg);
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
            {this.createScheduleChatList(scheduleChatList)}
          </Grid>

        </div>
      </Container>
    )
  }
}