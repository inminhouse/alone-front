import React, {Component} from 'react';

import { inject, observer } from 'mobx-react';

//ui
import { 
  Container, 
  Divider, 
  Header, 
  Segment, 
} from 'semantic-ui-react';
//shared
import { view } from '@/000_shared';

@inject('homeStore')
@observer
export default class extends Component {
  
  componentDidMount() {
    console.log(this.props);
    this.props.homeStore.findHome();
  }

  saerchPartner = e => {
    console.log(e);
    this.props.homeStore.saerchPartner();
    this.props.history.push('/search');
  }

  render() {

    const { 
      home,
      schedule,
      changeDestination,
      changeStart,
      changeEnd,
      // saerchPartner,
    } = this.props.homeStore;

    return (
      <div style={{width: '100%', }} >
        <view.ImageCenterObject src={home.src} >
          <Container style={{marginTop: '10em'}}>

            <Header inverted style={{fontSize: '4em'}} >{home.header}</Header>
            <Header inverted size="medium" >{home.subHeader}</Header>
            <Divider hidden/>
            <div style={{position: 'relative'}}>
              <Segment 
                compact 
                style={{
                  position: 'relative', 
                  left: '50%', 
                  transform: 'translate(-50%, 50%)',
                  borderRadius: '3rem',
                }}
              >
                <view.PartnerSearchForm
                  flex="column"
                  inline={true}
                  schedule={schedule}
                  changeDestination={changeDestination}
                  changeStart={changeStart}
                  changeEnd={changeEnd}
                  saerchPartner={this.saerchPartner}
                />
              </Segment>
            </div>
          </Container>
        </view.ImageCenterObject>
      </div>
    )
  }
}