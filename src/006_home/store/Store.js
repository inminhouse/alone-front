import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {

  constructor() {
    makeObservable(this);
  }
  
  @observable
  _home = {};
  @observable
  _schedule = {};

  @computed
  get home() {
    return toJS(this._home);
  }
  @computed
  get schedule() {
    return toJS(this._schedule);
  }

  @action
  setHome = v => this._home = v;
  @action
  setSchedule = v => this._schedule = v;

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
      src: '/img/alexandre-trouve-kOLIAZveKH8-unsplash.jpg',
      header: '함께 떠나세요',
      subHeader: '혼자보다 함께 일 때 더 즐겁습니다',
    })
  }


}