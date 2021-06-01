import React, {Component} from 'react';

//ui
import { 
  Divider,
  Feed,
} from 'semantic-ui-react';
//util
import moment from 'moment';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { chatHeight: 500, }
  }
  
  componentDidMount() {
    Promise.resolve()
      // .then(() => this.setChatHeight())
      .then(() => document.getElementById('chat').scrollTo(0, document.getElementById('chat').scrollHeight));
  }

  setChatHeight = () => this.setState({ 
    chatHeight: 
      ['grid',  'top-menu', 'bottom-chat']
        .map(x => {
          const el = document.getElementById(x);
          return el ? el.clientHeight : 0;
        })
        .reduce((a,b) => a - b)
  });

  convertMsgList = msgList => msgList.reduce((a,b, idx) => {
      
    b.moment = moment(b.time, 'YYYY-MM-DD HH:mm:ss');

    const lg = a[a.length - 1];//large group = id/date

    if(idx === 0 || lg.id !== b.id || lg.date !== b.moment.format('YYYY년 M월 D일 ddd')) {
      a.push({id: b.id, date: b.moment.format('YYYY년 M월 D일 ddd'), arr: [{time: b.moment.format('A hh:mm'), arr: [b]}]})
    } else {
      
      const sg = lg.arr[lg.arr.length - 1];//small group = time
      const msgT = b.moment.format('A hh:mm');

      if(sg.time !== msgT) {
        lg.arr.push({time: msgT, arr: [b]});
      } else {
        sg.arr.push(b)
      }
    }
    return a;
  }, []);

  createEvent = (msgList, id, user) => {

    return msgList.map((x, aidx) => 
      <React.Fragment key={aidx}>
        {aidx === 0 || msgList[aidx - 1].date !== x.date ? 
          <Divider horizontal style={{color: 'silver'}}>
            {x.date}
          </Divider> :
          <Divider horizontal hidden />
        }

        {x.arr.map((y, bidx) => {

          const self = x.id === id;
          const feedFlexDivStyle = {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: self ? 'flex-end' : 'flex-start',
          };
          const msgFlexDivStyle = {
            display: 'flex', 
            flexDiraction: 'row', 
            alignItems: 'flex-end', 
            justifyContent: 'flex-end',
          };
          const msgMetaFlexDivStyle = {
            display:'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-end',
          };
          const metaDataDivStyle = {
            [self ? 'paddingRight' : 'paddingLeft'] : '1ex', 
            color: 'silver',
          };

          return (
            <Feed.Event key={aidx + '-' + bidx} style={self ? {width: 'auto', alignSelf: 'flex-end'} : {}}>
              {!self && 
                <Feed.Label 
                  image={
                    typeof user === 'object' && user.id === x.id ? user.img : user.find(y => y.id === x.id).img
                  } 
                  style={{width: '3em'}}
                />
              }
              <div 
                style={feedFlexDivStyle}
              >
                {y.arr.map((z, cidx) => 
                  <div 
                    key={aidx + '-' + bidx + '-' + cidx}
                    style={msgFlexDivStyle}
                  >
                    {self && 
                      <div style={msgMetaFlexDivStyle}>
                        {z.status !== 'R' && <div style={metaDataDivStyle}>{z.status}</div>}
                        {y.arr.length - 1 === cidx && <div style={metaDataDivStyle}>{y.time}</div>}
                      </div>
                    }
                    <Feed.Content 
                      content={z.msg} 
                      style={{
                        maxWidth: '250px', 
                        marginTop: cidx === 0 ? '' : '1ex',
                        [self ? 'marginRight' : 'marginLeft']: '1em',
                        padding: '1em',
                        backgroundColor: 'silver', 
                        borderRadius: '1em',
                      }}
                    />
                    {!self && y.arr.length - 1 === cidx && <div style={metaDataDivStyle}>{y.time}</div>}
                  </div>
                )}
              </div>
            </Feed.Event>
          )
        })}
      </React.Fragment>
    )
  }

  render() {

    const {
      id,
      user,
      msgList,
    } = this.props;
    
    return (
      <Feed 
        id="chat"
        style={{
          display: 'flex', 
          flexDirection: 'column', 
          overflow: 'auto', 
          margin: 0, 
          padding: '1em 0 1em 0'
        }}
      >
        {this.createEvent(this.convertMsgList(msgList), id, user)}
      </Feed>
    )
  }
}