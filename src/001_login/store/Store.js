import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {

  constructor() {
    makeObservable(this);
  }
  
  @observable
  _auth = {};

  @computed
  get auth() {
    return toJS(this._auth);
  }

  @action
  changeAuth = v => this._auth = v;

  changeEmail = v => {
    this.changeAuth({
      ...this.auth,
      email: v
    });
  }
  
  changePassword = v => {
    
  }

}