import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {

  constructor() {
    makeObservable(this);
  }
  
  @observable
  _chatList = [];
  @observable
  _searchChat = '';
  @observable
  _chatHome = null;
  @observable
  _chatInfo = null;
  @observable
  _msgList = [];
  @observable
  _msg = '';

  @computed
  get chatList() {
    return toJS(this._chatList);
  }
  @computed
  get searchChat() {
    return this._searchChat;
  }
  @computed
  get chatHome() {
    return toJS(this._chatHome);
  }
  @computed
  get chatInfo() {
    return toJS(this._chatInfo);
  }
  @computed
  get msgList() {
    return toJS(this._msgList);
  }
  @computed
  get msg() {
    return this._msg;
  }

  @action
  setChatList = v => this._chatList = v;
  @action
  setSearchChat = v => this._searchChat = v;
  @action
  setChatHome = v => this._chatHome = v;
  @action
  setChatInfo = v => this._chatInfo = v;
  @action
  setMsgList = v => this._msgList = v;
  @action
  setMsg = v => this._msg = v;


  findChatList = () => {
    this.setChatList([
      {
        chatId: '000101',
        chatImg: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
        chatName: 'Rachel',
        recentMsg: {
          msg: '어젠 어디갔었어?',
          time: '2021-05-22 11:10:50'
        },
        unreadMsgCnt: 2,
        status: [
          'bookmark',
          'bell slash'
        ],
      },
      {
        chatId: '000102',
        chatImg: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
        chatName: 'Christian',
        recentMsg: {
          msg: 'Hi!',
          time: '2021-05-22 11:10:50'
        },
        // unreadMsgCnt: 2
        status: [
          'ban',
        ],
      },
      {
        chatId: '000103',
        chatImg: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
        chatName: '훈이',
        recentMsg: {
          msg: 'Hi!',
          time: '2021-05-22 11:10:50'
        },
        // unreadMsgCnt: 2
        status: [
        ],
      },
    ]);
  }

  findChatHome = () => {
    this.setChatHome({
      imgSrc: 'https://firebase.google.com//images/usecases/chat-features_1x.png',
      icon: 'chat',
      header: '연락하여 일정을 조율하세요',
      subHeader: '개인정보 공유는 사생활 노출이 될 수 있습니다.',
    });
  }

  findChat = v => {
    console.log(v);
    //axios 조회
    //axios.get(`/chat/${v.chatId}`).then({data} => this.setChatInfo(data....); this.setMsgList(data...)).catch(e => console.log(e))

    //채팅방 정보 조회
    this.setChatInfo({
      chatId: '000101',
      type: 'P',
      chatImg: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      chatName: 'Rachel',
      user: {
        id: 'U001002',
        img: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
        name: 'Rachel',
      },
      status: [
        'bookmark',
        'bell slash'
      ]
    });

    this.setMsgList([
      {
        id: 'U001002',
        msgType: 'T',
        msg: 'You added Elliot',
        status: 'R',
        time: '2021-05-20 18:09:40',
      },
      {
        id: 'U001002',
        msgType: 'T',
        msg: 'You added Elliot Fu to the group Coworkers',
        status: 'R',
        time: '2021-05-20 18:09:46',
      },
      {
        id: 'U001002',
        msgType: 'T',
        msg: 'You added Elliot Fu to the group Coworkers',
        status: 'R',
        time: '2021-05-20 18:09:50',
      },
      //mymsg
      {
        id: 'U001001',
        msgType: 'T',
        msg: 'You added Elliot',
        status: 'R',
        time: '2021-05-20 18:09:52',
      },
      {
        id: 'U001001',
        msgType: 'T',
        msg: 'You added Elliot Fu to the group Coworkersddfsfsf',
        status: 'R',
        time: '2021-05-20 18:09:54',
      },
      {
        id: 'U001001',
        msgType: 'T',
        msg: 'You added Elliot Fu to the group Coworkersddfsfsf',
        status: 'R',
        time: '2021-05-20 18:10:50',
      },
    
      {
        id: 'U001002',
        msgType: 'T',
        msg: 'You added Elliot',
        status: 'R',
        time: '2021-05-21 11:09:40',
      },
      {
        id: 'U001002',
        msgType: 'T',
        msg: 'You added Elliot Fu to the group Coworkers sfsfsecv dfsefd s efsd efsf',
        status: 'R',
        time: '2021-05-21 11:10:40',
      },
      {
        id: 'U001002',
        msgType: 'T',
        msg: 'You added Elliot Fu to the group Coworkers sfsfsecv dfsefd s efsd efsf',
        status: 'R',
        time: '2021-05-22 11:10:45',
      },

      {
        id: 'U001001',
        msgType: 'T',
        msg: 'You added Elliot Fu to the group Coworkersddfsfsf',
        status: '1',
        time: '2021-05-22 11:10:50',
      },
    ])
  }

  sendMsg = () => {
    console.log(this._msg);
  }




}