import React, {Component} from 'react';

//ui
import { 
  Image,
  List,
  Input,
  Menu,
  Label,
} from 'semantic-ui-react';
//util
import moment from 'moment';
//shared
import { shareFunction } from '@/000_shared';

export default class extends Component {

  reconfigurationList = (word, list) => word ? 
    list.filter(x => {

      if(x.chatName.toUpperCase().indexOf(word.toUpperCase()) > -1) {
        return true;
      }
      if(x.chatName.toLowerCase().indexOf(word.toLowerCase()) > -1) {
        return true;
      }

      const nameEle = x.chatName.split('');
      
      if(
        nameEle.map(y => shareFunction.getConsonantVowel(y).f)
          .join('')
          .indexOf(word) 
        > -1
      ) {
        return true;
      }

      if(
        nameEle.map(y => shareFunction.getConsonantVowel(y).s)
          .join('')
          .indexOf(word) 
        > -1
      ) {
        return true;
      }

      return false;
    }) : 
    list;
  
  checkTime = v => {
    const today = moment(new Date());

    const m = moment(v, 'YYYY-MM-DD HH:mm:ss');

    if(today.format('YYYY-MM-DD') === m.format('YYYY-MM-DD')) {
      return m.format('A hh:mm');
    } else {
      if(today.subtract(1, 'days').format('DD') === m.format('DD')) {
        return 'yesterday'
      } else {
        if(today.format('YYYY') !== m.format('YYYY')) {
          return m.format('YYYY')
        } else {
          return m.format('MM-DD');
        }
      }
    }
  }
  
  createChatList = (list, id, folding, func) => list.map((x, idx) => (
    <List.Item 
      key={idx}
      active={x.chatId === id} 
      style={{
        padding: '1ex 1' + (!folding ? 'ex' : 'em'),
        display: 'flex',
        flexDirection: 'row',
      }}
      onClick={() => func(x)}
    >
      <Image avatar src={x.chatImg} style={{width: '4em', height: 'auto', alignSelf: 'center'}}/>
      {folding && 
        <div style={{paddingLeft: '1em', display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
          <div style={{fontWeight: 700, color: 'black'}}>
            {x.status && x.status.length > 0 && x.status.find(y => y === 'bookmark') && 
              <i className="yellow star icon"/>
            }
            {x.chatName}
            
            {x.status && x.status.length > 0 && 
              x.status.filter(y => y !== 'bookmark').map(y => <i className={'grey ' + y + ' icon'} style={{marginLeft: 5}}/>)
            }
          </div>
          <div style={{marginTop: '2px'}}>
            {x.recentMsg.msg}
          </div>
        </div>
      }
      
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, alignItems: 'flex-end'}}>
        <div style={{color: 'silver', fontSize: 'small', }}>
          {this.checkTime(x.recentMsg.time)}
        </div>
        
        {x.unreadMsgCnt && 
          <div 
            style={{
              textAlign: 'center', 
              backgroundColor: 'red', 
              padding: '.2em .5em',
              borderRadius: '.5em',
              color: 'white',
              alignSelf: 'flex-end',
              fontSize: '1rem',
            }}
          >
            {x.unreadMsgCnt}
          </div>
        }
      </div>
      
    </List.Item>
  ));

  render() {

    const {
      chatList,
      searchChat,
      activeId,
      folding,
      changeSearchChat,
      findChat,
    } = this.props;

    return (
      <Menu secondary vertical size='large' style={{width: '100%'}}>
        <Menu.Item>
          <Input 
            icon='search' 
            placeholder='Search...' 
            value={searchChat}
            onChange={(e, d) => changeSearchChat(d.value)}
          />
        </Menu.Item>
        <List selection verticalAlign='middle'>
          {this.createChatList(
            this.reconfigurationList(searchChat, chatList), 
            activeId,
            folding,
            findChat,
          )}
        </List>
      </Menu>
    )
  }
}