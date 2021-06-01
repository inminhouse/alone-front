import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {

  constructor() {
    makeObservable(this);
  }
  
  @observable
  _topImageList = [];
  @observable
  _homeStruct = [];
  @observable
  _activeIdx = 0;

  @computed
  get topImageList() {
    return toJS(this._topImageList);
  }
  @computed
  get homeStruct() {
    return toJS(this._homeStruct);
  }
  @computed
  get activeIdx() {
    return this._activeIdx;
  }

  @action
  setTopImageList = v => this._topImageList = v;
  @action
  setHomeStruct = v => this._homeStruct = v;
  @action
  setActiveIdx = v => {
    if(v < 0 || v > this.topImageList.length - 1) {
      return 
    }
    this._activeIdx = v;
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