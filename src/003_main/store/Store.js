
import { makeObservable, observable, computed, action, toJS } from "mobx"
import { Divider, } from '@material-ui/core';

export default class {

  constructor() {
    makeObservable(this);
  }
  
  @observable
  _menu = [];
  @observable
  _select = null;
  @observable
  _status = {left: false, topUser: null};
  @observable
  _leftTreeStatus = {};

  @computed
  get menu() {
    return toJS(this._menu);
  }
  @computed
  get select() {
    return this._select && toJS(this._select);
  }
  @computed
  get status() {
    return toJS(this._status);
  }
  @computed
  get leftTreeStatus() {
    return toJS(this._leftTreeStatus);
  }
  
  @action
  setStatus = v => this._status = v;
  @action
  setLeftTreeStatus = v => this._leftTreeStatus = v;
  @action
  setMenu = v => this._menu = v;
  @action
  setSelect = v => this._select = v;

  handleTopUser = v => {
    this.setStatus({
      ...this.status,
      topUser: v
    });
  }

  handleLeft = () => {
    this.setStatus({
      ...this.status,
      left: !this.status.left
    });
  }

  addTreeStatus = n => {
    this.setLeftTreeStatus({
      ...this.leftTreeStatus,
      [n]: false
    });
  }

  handleTree = n => {
    this.setLeftTreeStatus({
      ...this.leftTreeStatus,
      [n]: !this.leftTreeStatus[n]
    });
  }

  closeTree = n => {
    this.setLeftTreeStatus({
      ...this.leftTreeStatus,
      [n]: false
    });
  }

  //function
  createMenu = list => list.reduce((a,b, idx) => {
    if(b.divider) {
      a.push('divider')
      // a.push(<Divider key={idx}/>);
      a.push([]);
    } else {
      
      if(b.children){
        b.children = this.createMenu(b.children);
        // b.open = false;
        this.addTreeStatus(b.id + '-open');
      }

      if(a.length === 0){
        a.push([b]);
      } else {
        a[a.length-1] = [
          ...a[a.length-1],
          b
        ];
      }
    }
    return a;
  }, []);

}