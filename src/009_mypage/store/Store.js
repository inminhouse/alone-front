import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {

  constructor() {
    makeObservable(this);
  }
  
  @observable
  _userInfo = {};

  @computed
  get userInfo() {
    return toJS(this._userInfo);
  }

  @action
  setUserInfo = v => this._userInfo = v;

  findUserInfo = () => {
    console.log('ddd');
    this.setUserInfo({
      id: '',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0jRCKpogcPjhf4qwBPAcKsQAzkniCK6nsA&usqp=CAU',
      name: '이민상',
      phone: '01020146315',
      intro: 'Hi Hi!',
    });
  }




}