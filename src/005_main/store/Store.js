import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {

  constructor() {
    makeObservable(this);
  }

  @observable
  _schedule = {};
  @observable
  _scheduleList = [];

  @computed
  get schedule() {
    return toJS(this._schedule);
  }
  @computed
  get scheduleList() {
    return toJS(this._scheduleList);
  }

  @action
  setSchedule = v => this._schedule = v;
  @action
  setScheduleList = v => this._scheduleList = v;

  findScheduleList = () => {
    this.setScheduleList([
      {
        img: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
        title: '서울 종로투어',
        startDate: '2021-07-11',
        endDate: '2021-07-21',
        destination: [
          '서울특별시 중구 동대문시장', 
          '서울특별시 종로구 삼청동 갤러리현대',
        ]
      },
      {
        img: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
        title: '서울 종로투어',
        startDate: '2021-07-11',
        endDate: '2021-07-21',
        destination: [
          '서울특별시 중구 동대문시장', 
          '서울특별시 종로구 삼청동 갤러리현대',
        ]
      },
    ])
  }

  addDestination = () => {
    const destination = this.schedule.destination ? this.schedule.destination : [''];
    destination.push('');
    this.setSchedule({
      ...this.schedule,
      destination: destination
    });
  }

  changeDestination = (v, idx) => {
    const destination = this.schedule.destination ? this.schedule.destination : [''];
    destination[idx] = v;
    this.setSchedule({
      ...this.schedule,
      destination: destination
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




}