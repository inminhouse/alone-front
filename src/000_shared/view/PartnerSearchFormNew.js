import React, {Component} from 'react';
//ui
import {
  Input,
  Form,
  Button,
} from 'semantic-ui-react';

import DatePicker from './DatePicker';


export default class extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      flex: props.flex,
    };
    window.addEventListener('resize', this.widthCheck);
  }

  componentDidMount() {

    console.log(document.getElementById('search').clientWidth);
    // console.log(this.formRef.props.children.props.children);
    this.inputRef.inputRef.current.style.borderRadius = '2em'
    // window.addEventListener('resize', this.widthCheck);
    this.widthCheck();
  }

  widthCheck = () => {
    !this.props.fixed && this.setState({flex: window.innerWidth < 1000 ? 'column' : 'row'});
  }

  createButton = (button, vertical) => {
    return (
      button ? 
        <Form.Field style={{padding: vertical ? '' : '0 0 0 .5em'}}>
          <div style={{position: 'relative'}}>
            <Button circular basic icon={button.key === 'add' ? 'add' : button.key === 'search' && 'search'} style={{width: vertical ? '100%' : ''}}/>
          </div>
        </Form.Field>
        :
        <React.Fragment />
    )
  }

  render() {
    const { flex } = this.state;
    const {
      // customForm = [
      //   {
      //     label: '위치',
      //     node: {
      //       component: 'input',
      //       props: {
      //         icon: 'search', 
      //         placeholder: '어디로 가시나요',
      //       }, 
      //       value: 'destination',
      //       default: '',
      //       onChange: 'changeDestination'
      //     }
      //   },
      //   {
      //     label: '출발일',
      //     node: {
      //       component: 'datePicker',
      //       props: {
      //         // icon: 'search', 
      //         placeholder: '언제 가시나요',
      //       }, 
      //       value: 'start',
      //       // default: '',
      //       onChange: 'changeStart'
      //     }
      //   },
      // ],
      vertical,
      schedule,
      changeDestination,
      changeStart,
      changeEnd,
      addSchedule,
      saerchPartner,
    } = this.props;

    const {
      destination = '',
      start,
      end,
    } = schedule;

    const button = addSchedule ? {key: 'add', func: addSchedule} : saerchPartner ? {key: 'search', func: saerchPartner} : null;
    
    return (
      <div 
        id="search"
        style={{
          display: 'flex',
          flexDirection: flex,
          alignItems: 'center',
        }}
      >
        <div 
          style={{
            margin: '1ex',
            display: 'flex',
            flexDirection: flex,
            alignItems: flex === 'row' ? 'center' : '',
          }}
        >
          <label
            style={{
              marginRight: '1ex',
              marginBottom: '1ex',
              color: 'rgba(0,0,0,.87)',
              fontWeight: 700,
            }}
          >
            위치
          </label>
          <Input 
            icon='search' 
            placeholder='어디로 가시나요'
            value={destination} 
            onChange={(e,d) => changeDestination(d.value)}
            ref={ref => this.inputRef = ref}
          />
        </div>
        
        <div 
          style={{
            margin: '1ex',
            display: 'flex',
            flexDirection: flex,
            alignItems: flex === 'row' ? 'center' : '',
          }}
        >
          <label
            style={{
              marginRight: '1ex',
              marginBottom: '1ex',
              color: 'rgba(0,0,0,.87)',
              fontWeight: 700,
            }}
          >
            출발일
          </label>
          <DatePicker
            // label="출발일"
            placeholder="언제 가시나요"
            prevDayDisable
            rounded
            value={start}
            onChangeDate={(e, d) => changeStart(d.date)}
          />
        </div>
        <div 
          style={{
            margin: '1ex',
            display: 'flex',
            flexDirection: flex,
            alignItems: flex === 'row' ? 'center' : '',
          }}
        >
          <label
            style={{
              marginRight: '1ex',
              marginBottom: '1ex',
              color: 'rgba(0,0,0,.87)',
              fontWeight: 700,
            }}
          >
            복귀일
          </label>
          <DatePicker
            // label="출발일"
            placeholder="언제 돌아오시나요"
            prevDayDisable
            rounded
            value={end}
            onChangeDate={(e, d) => changeEnd(d.date)}
          />
        </div>
        {/* <div 
          style={{
            margin: '1ex',
            width: '100%'
          }}
        > */}
          <Button fluid={flex === 'column'} circular basic icon="search" style={{margin: '1ex'}}/>
        {/* </div> */}
      </div>
    )
  }
}