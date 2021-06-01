import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {

  constructor() {
    makeObservable(this);
  }

  @observable
  _schedule = {};
  // @observable
  // _topImageList = [];
  // @observable
  // _homeStruct = [];
  // @observable
  // _activeIdx = 0;

  @computed
  get schedule() {
    return toJS(this._schedule);
  }
  // @computed
  // get topImageList() {
  //   return toJS(this._topImageList);
  // }
  // @computed
  // get homeStruct() {
  //   return toJS(this._homeStruct);
  // }
  // @computed
  // get activeIdx() {
  //   return this._activeIdx;
  // }

  @action
  setSchedule = v => this._schedule = v;

  // @action
  // setTopImageList = v => this._topImageList = v;
  // @action
  // setHomeStruct = v => this._homeStruct = v;
  // @action
  // setActiveIdx = v => {
  //   if(v < 0 || v > this.topImageList.length - 1) {
  //     return 
  //   }
  //   this._activeIdx = v;
  // }

  changeDestination = v => {
    this.setSchedule({
      ...this.schedule,
      destination: v
    });
  }

  changeStart = v => {
    this.setSchedule({
      ...this.schedule,
      start: v
    });
  }

  changeEnd = v => {
    this.setSchedule({
      ...this.schedule,
      end: v
    });
  }

  addSchedule = () => {
    console.log('addSchedule call');
  }

  saerchPartner = () => {
    console.log('saerchPartner call');
  }





  changeEmail = v => {
    this.changeAuth({
      ...this.auth,
      email: v
    });
  }
  
  changePassword = v => {
    this.changeAuth({
      ...this.auth,
      password: v
    });
  }

  login = () => {
    localStorage.setItem("sessionID", "ASDRFEFD")
    console.log(localStorage.getItem("sessionID"))
  }

}