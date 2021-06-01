import React, {Component} from 'react';
//ui
import {
  Icon,
  Popup,
  Input,
} from 'semantic-ui-react'
//util
import moment from 'moment';
//view
import CalendarViewer from './CalendarViewer';

/**
 * 
 */
export default class extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log('constructor');
  // }

  componentDidMount() {

    if(this.props.rounded){
      this.inputRef.inputRef.current.style.borderRadius = '2em'
    }
  }

  render() {

    const {
      label, 
      placeholder,
      prevDayDisable,
      format = 'YYYY-MM-DD',
      value,
      onChangeDate,
    } = this.props;

    return (
      <React.Fragment>
        {label && <label>{label}</label>}
        <Popup
          on='click'
          trigger={
            <Input 
              icon='calendar alternate outline' 
              placeholder={placeholder}
              value={value ? moment(value).format(format) : ''}
              // style={style}
              ref={ref => this.inputRef = ref}
            />
          }
          style={{padding: 0}}
        >
          
          <Popup.Content>
            <CalendarViewer
              prevDayDisable={prevDayDisable}
              value={value}
              onChangeDate={onChangeDate}
            />
          </Popup.Content>
        </Popup>
      </React.Fragment>
    )
  }
}