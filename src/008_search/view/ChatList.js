import React, {Component} from 'react';

//ui
import { 
  Image,
  List,
  Input,
  Menu,
  Label,
} from 'semantic-ui-react';
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
  
  createChatList = (list, id, folding, func) => list.map((x, idx) => (
    <List.Item 
      key={idx}
      active={x.chatId === id} 
      style={{padding: '1ex 1' + (!folding ? 'ex' : 'em')}}
      onClick={() => func(x)}
    >
      <Image avatar src={x.chatImg} style={{width: '4em', height: 'auto'}}/>
      {folding &&
        <List.Content style={{paddingLeft: '1em'}}>
          <List.Header style={{padding: '3px 0'}}>{x.chatName}</List.Header>
          <List.Description>{x.recentMsg}</List.Description>
        </List.Content>
      }

      {x.unreadMsgCnt && <Label color='red' floating={!folding}>{x.unreadMsgCnt}</Label>}

      {x.status && x.status.length > 0 && x.status.map(y => {
        if(y === 'bookmark') {
          return <i key={y} className="yellow star icon left top corner"/>
        } else if(folding && y) {
          return (
            <div key={y} >
              <i className={y + ' slash icon right bottom corner'} />
            </div>
          )
        }
      })}
      
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