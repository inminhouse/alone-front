import React, { Component } from 'react';

//ui
import { 
  Container, 
  Menu,
  Card,
  List,
  Button,
  Header,
  Item,
  Image,
  Icon,
  Grid,
  Divider,
  Segment,
} from 'semantic-ui-react';

export default class extends Component {

  render() {
    const { info, userInfo } = this.props;

    // console.log('come here', match);

    return (
      <React.Fragment>
        <Segment stacked>
          <Header as="h1">{info.name}</Header>
        </Segment>
        <Segment padded>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Grid divided>
              <Grid.Row style={{alignItems: 'center'}}>
                <Grid.Column width={3}>
                  <Header as="h4">사진</Header>
                </Grid.Column>
                <Grid.Column style={{flexGrow: 1}}>
                  <div 
                    className="ui rounded image" 
                    style={{
                      height: '250px', 
                      width: '290px',
                      // backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 95% )',
                    }}
                  >
                    <img 
                      src={userInfo.imgSrc}
                      style={{
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute', 
                        clipPath: 'polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%, 0% 100%, 100% 100%, 100% 0%, 0% 0%, 0% 100%, 20% 80%)',
                        backgroundColor: 'rgba(0, 0, 0, .5)',
                        top: 0,
                        height: '100%',
                        width: '100%',
                      }} 
                    />
                  </div>
                    
                  {/* <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' rounded /> */}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{alignItems: 'center'}}>
                <Grid.Column width={3}>
                  <Header as="h4">이름</Header>
                </Grid.Column>
                <Grid.Column style={{flexGrow: 1}}>
                  {userInfo.name}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{alignItems: 'center'}}>
                <Grid.Column width={3}>
                  <Header as="h4">연락처</Header>
                </Grid.Column>
                <Grid.Column style={{flexGrow: 1}}>
                  {userInfo.phone}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                <Grid.Column width={3}>
                  <Header as="h4">자기소개</Header>
                </Grid.Column>
                <Grid.Column style={{flexGrow: 1}}>
                  {userInfo.intro}
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider hidden />
            <Button content="저장" primary style={{width: 'fit-content', alignSelf: 'flex-end'}}/>
          </div>
        </Segment>
      </React.Fragment>
    )
  }
}