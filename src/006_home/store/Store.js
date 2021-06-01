import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {

  constructor() {
    makeObservable(this);
  }
  
  @observable
  _home = {};
  @observable
  _schedule = {};

  // @observable
  // _topImageList = [];
  // @observable
  // _homeStruct = [];
  // @observable
  // _activeIdx = 0;

  @computed
  get home() {
    return toJS(this._home);
  }
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
  setHome = v => this._home = v;
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

  findHome = () => {
    this.setHome({
      src: '/img/travel.jpg',
      header: '함께 떠나세요',
      subHeader: '혼자보다 함께 일 때 더 즐겁습니다',
    })
  }


}