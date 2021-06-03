import React, {Component} from 'react';

import {
  Container,
  Divider,
  Image,
  Button,
  Header,
  List,
  Menu,
  Icon,
  Popup,
  Input,
  Segment,
} from 'semantic-ui-react';

import { view } from '@/000_shared';


export default class extends Component {

  state = {
    active: null
  }

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // const popup = document.getElementsByClassName('popup transition visible');
    // console.log(popup, popup.length, popup.item(0).style.maxWidth);
    // popup.item(0).style.maxWidth = 'none'
  }

  render() {
    
    const { active } = this.state;
    const { 
      schedule,
      saerchPartner,
      addDestination,
      changeDestination,
    } = this.props;

    const {
      destination = [''],
      startDate,
      endDate,
    } = schedule;

    return (
      <div 
        style={{
          display: 'flex', 
          flexDirection: 'column',
          padding: '.5em 0 1em 0',
          // paddingBottom: '1em'
          // padding
        }} 
      >
        <label style={{marginBottom: '1ex', fontWeight: 700,}}>위치</label>
        {destination.map((x, idx) => (
          <Input 
            key={idx} 
            icon="search"
            value={x} 
            onChange={(e, d) => changeDestination(d.value, idx)}
            style={{
              marginBottom: idx + 1 === destination.length ? '' : '1ex'
            }}
          />
        ))}
        <Button 
          key="0"
          basic 
          icon="add" 
          style={{margin: '1ex 0 0 0'}}
          onClick={() => addDestination()}
        />
        <label style={{margin: '1ex 0', fontWeight: 700,}}>출발일</label>
        <view.DatePicker value={startDate}/>
        <label style={{margin: '1ex 0', fontWeight: 700,}}>복귀일</label>
        <view.DatePicker value={endDate}/>
        <Button 
          key="1"
          basic 
          // icon="add" 
          style={{margin: '1ex 0 0 0'}}
        >
          일정추가
        </Button>
      </div>
    )
  }
}