import React, {Component} from 'react';
//ui
import {
  Button,
  Table,
  Header,
  Icon,
} from 'semantic-ui-react'
//util
import moment from 'moment';

/**
 * 
 */
export default class extends Component {

  days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor(props) {
    super(props);
    console.log('calendar constructor', props);

    this.state = {
      value: props.value,
      viewVal: props.value,
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.value !== this.props.value){
      this.setState({value: this.props.value})
    }
  }

  monthStatus = (v1, v2) => v1 === v2 ? 'A' : v1 > v2 ? 'next' : 'prev';
  dayStatus = (v1, v2) => v1 === v2 ? 'today' : v1 > v2 ? 'next' : 'prev';

  onClickDay = (e, day) => {
    const { onChangeDate } = this.props;
    const { viewVal } = this.state;
    const vv = moment(viewVal);

    if(day.status === 'prevMon')
      vv.add(-1, 'months');

    if(day.status === 'nextMon')
      vv.add(1, 'months');

    const yyyymm = vv.format('YYYYMM');
    const value = moment(yyyymm + (day.day < 10 ? '0' + day.day : day.day), 'YYYYMMDD');
    console.log(value.toDate());
    day.date = value.toDate();
    onChangeDate && onChangeDate(e, day);
  }

  /**
   * 특정값에 따라 일자를 어떻게 보여질지 판단하여 Node를 구성하여 return한다.
   * @param {Object} day:: day의 일자나 속성 상태
   * @param {Number} idx:: cell 구성 시 사용될 index
   * @param {boolean} prevDayDisable:: 현재일 이전일자 선택 처리 여부(true: 선택안됨, false: 선택가능)
   * @returns {Node} :: 일자에 맞는 Node 구성
   */
  createButton = (day, idx, prevDayDisable) => {

    const props = {};
    const style = { margin: 0, padding: 0, width: '2em', height: '2em' }

    if(day.status === 'today') {
      props.color = 'blue';
      props.basic = true;
    } else if(day.status === 'value') {
      props.color = 'blue';
    } else {
      style.backgroundColor = 'unset';

      if(prevDayDisable && day.dStatus === 'prev') {
        props.disabled = true;
      }

      if(day.status === 'nextMon' || day.status === 'prevMon'){
        style.color = 'rgba(0,0,0,.3)'
      }
    }

    props.style = style;

    return (
      <Table.Cell 
        key={idx} 
        style={{
          padding: '0.5em 0.5em', 
          backgroundColor: prevDayDisable && day.dStatus === 'prev' ? 'lightgray' : 'unset'
        }}
      >
        <Button 
          size='mini' 
          {...props}
          onClick={e => this.onClickDay(e, day)}
        >
          {day.day}
        </Button>
      </Table.Cell>
    )
  };

  /**
   * 오늘 날짜와 사용자가 보려는 월(달)을 이용하여 사용자에게 보여질 달력을 Array로 만들어 return한다.
   * status:: prevMon:이전달, prev:전일, today:현재일, value: 선택일, next:다음일, nextMon:다음달
   * dStatus:: (현재일 기준) prev:전일, today:현재일, next:담일
   * month status:: (현재달 기준) prev:전달, A:현재달, next:담달
   * @param {Date} v:: 실제 선택 날짜
   * @param {Date} vv:: 사용자가 보고있는 날짜
   * @returns {Array} month:: 사용자가 보는 달력
   */
  makeMonth = (v, vv) => {

    //value
    const valD = Number(moment(v).format('D'));
    //today
    const today = moment(new Date());
    const toD = Number(today.format('D'));
    const toYyyymmdd = Number(today.format('YYYYMMDD'));
    
    //view 달
    const yyyymm = Number(vv.format('YYYYMM'));
    const startDdd = vv.startOf('month').format('ddd');
    const endDay = vv.endOf('month').format('D');
    const prevEndDay = vv.subtract(1, 'months').endOf('month').format('D');
    
    //view Month check
    const checkMonth = this.monthStatus(yyyymm, Number(today.format('YYYYMM')));
    //달의 시작 요일 확인
    const startIdx = this.days.findIndex(x => x === startDdd.substring(0, startDdd.length - 1));

    //주단위 달 구성[1주[], 2주[], ...]
    const month = [];
    //첫째주 구성(1주[])
    const firstWeek = [];

    //이전 달 월말 구성
    for(let i=0; i<startIdx; i++) {
      const day = prevEndDay - (startIdx - i) + 1;
      firstWeek.push({
        status: 'prevMon',
        dStatus: this.dayStatus(Number((yyyymm - 1) + '' + day), toYyyymmdd),
        day: day
      });
    }

    //현재 달 월초 주 구성
    for(let i=1; i<7 - startIdx + 1; i++) {
      firstWeek.push({
        status: checkMonth === 'A' ? i < toD ? 'prev' : i === toD ? 'today' : i === valD ? 'value' : 'next' : checkMonth,
        dStatus: this.dayStatus(Number(yyyymm + '0' + i), toYyyymmdd),
        day: i
      });
    }

    month.push(firstWeek);

    //첫째주를 제외하고 몇 주가 생성되는지 확인
    const weeks = Math.ceil((endDay - (7 - startIdx)) / 7);

    //현재 달 월초 외 주 단위 구성
    for(let i=0; i<weeks; i++) {

      const week = [];
      //주 단위 구성
      for(let j=1; j<8; j++) {
        const day = j + (7 * i) + (7 - startIdx);
        
        if(day > endDay){//다음 달 월초 구성
          week.push({
            status: 'nextMon',
            dStatus: this.dayStatus(Number((yyyymm + 1) + '0' + (day - endDay)), toYyyymmdd),
            day: day - endDay
          });
        } else {//현재 달 구성
          week.push({
            status: checkMonth === 'A' ? day < toD ? 'prev' : day === toD ? 'today' : day === valD ? 'value' : 'next' : checkMonth,
            dStatus: this.dayStatus(Number(yyyymm + (day < 10 ? '0' + day : '' + day)), toYyyymmdd),
            day: day
          });
        }
      }
      month.push(week);
    }

    return month;
  }

  render() {

    const { prevDayDisable, } = this.props;
    const { value, viewVal } = this.state;
    
    const vv = moment(viewVal);
    const yyyy = vv.format('YYYY');
    const mm = vv.format('MM');

    const month = this.makeMonth(value, vv);

    return (
      <Table size="small" textAlign="center" compact style={{border: 0}}>

        <Table.Header>

          <Table.Row>
            <Table.HeaderCell colSpan='2'>{/* < 버튼 */}
              <Button 
                basic 
                icon 
                size='mini' 
                floated="left"
                onClick={e => this.setState({viewVal: moment(viewVal).add(-1, 'months').toDate()})}
              >
                <Icon name='angle left' />
              </Button>
            </Table.HeaderCell>
            <Table.HeaderCell colSpan='3'>{/* 월 년도 */}
              <Header>{mm + ' ' + yyyy}</Header>
            </Table.HeaderCell>
            <Table.HeaderCell colSpan='2'>{/* > 버튼 */}
              <Button 
                basic 
                icon 
                size='mini' 
                floated="right"
                onClick={e => this.setState({viewVal: moment(viewVal).add(1, 'months').toDate()})}
              >
                <Icon name='angle right' />
              </Button>
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row>{/* 요일 출력 */}
            {this.days.map((x, idx) => <Table.HeaderCell key={idx} style={{padding: '0.5em 0.5em'}}>{x}</Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {month.map((x, i) => (
            <Table.Row key={'r-' + i}>
              {x.map((y, j) => this.createButton(y, j, prevDayDisable))}
            </Table.Row>
          ))}
        </Table.Body>

      </Table>
    )
  }
}