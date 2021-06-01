import React, {Component} from 'react';
//ui
import {
  Input,
  Form,
  Button,
} from 'semantic-ui-react';

import DatePicker from './DatePicker';


export default class extends Component {
  
  componentDidMount() {
    console.log(this.formRef.props.children.props.children);
    this.inputRef.inputRef.current.style.borderRadius = '2em'
  }

  createButton = (button, vertical) => {
    return (
      button ? 
        <Form.Field style={{padding: vertical ? '' : '0 0 0 .5em'}}>
          <div style={{position: 'relative'}}>
            <Button 
              circular 
              basic 
              icon={button.key === 'add' ? 'add' : button.key === 'search' && 'search'} 
              style={{width: vertical ? '100%' : ''}}
              onClick={e => button.func(e)}
            />
          </div>
        </Form.Field>
        :
        <React.Fragment />
    )
  }

  render() {

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
      <Form ref={ref => this.formRef = ref }>
        {vertical ? 
          <React.Fragment>
            <Form.Field
              inline={false}
            >
              <label >
                위치
              </label>
              <Input 
                icon='search' 
                placeholder='어디로 가시나요'
                value={destination} 
                // style={{borderRadius: '2em'}}
                onChange={(e,d) => changeDestination(d.value)}
                ref={ref => this.inputRef = ref}
              />
            </Form.Field>
            
            <Form.Field
              inline={false}
            >
              <DatePicker
                label="출발일"
                placeholder="언제 가시나요"
                prevDayDisable
                rounded
                value={start}
                onChangeDate={(e, d) => changeStart(d.date)}
              />
            </Form.Field>
            <Form.Field
              inline={false}
            >
              <DatePicker
                label="복귀일"
                placeholder="언제 돌아오시나요"
                // prevDayDisable
                rounded
                value={end}
                onChangeDate={(e, d) => changeEnd(d.date)}
              />
            
            </Form.Field>
            {this.createButton(button, vertical)}
          </React.Fragment>
          : 
          <Form.Group 
            style={{margin: 0}}
          >
            <Form.Field
              inline
            >
              <label >
                위치
              </label>
              <Input 
                icon='search' 
                placeholder='Search...'
                value={destination} 
                style={{borderRadius: '2em'}}
                onChange={(e,d) => changeDestination(d.value)}
                ref={ref => this.inputRef = ref}
              />
            </Form.Field>
            
            <Form.Field
              inline
            >
              <DatePicker
                label="출발일"
                placeholder="언제 가시나요"
                prevDayDisable
                rounded
                value={start}
                onChangeDate={(e, d) => changeStart(d.date)}
              />
            </Form.Field>
            <Form.Field
              inline
            >
              <DatePicker
                label="복귀일"
                placeholder="언제 돌아오시나요"
                rounded
                // prevDayDisable
                value={end}
                onChangeDate={(e, d) => changeEnd(d.date)}
              />
            
            </Form.Field>
            {this.createButton(button, vertical)}
          </Form.Group>
        }
      </Form>
    )
  }
}