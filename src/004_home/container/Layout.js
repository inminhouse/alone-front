import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

//ui
import { Grid, Loader, Button, Container, Divider, Header, Segment, Item } from 'semantic-ui-react';

import {
  CssBaseline,
  // Divider,
  // Container,
  Typography,
  Breadcrumbs,
} from '@material-ui/core';

import { view } from '@/000_shared';
import GridItem from '../view/GridItem';
import GridCard from '../view/GridCard';
import ImageBanner from '../view/ImageBanner';

@inject('homeStore')
@observer
export default class extends Component {
  
  componentDidMount() {
    
    const list = [
      {
        src: '/img/7970d8aad9375beb6cfc04ffd0b49806.png'
      },
      {
        src: '/img/1976740a70deb1ede568bea323edd818.png'
      },
      {
        src: '/img/bd1d5e85a7249c93f00e5e7a7c685058.png'
      },
      {
        src: '/img/e1444a8ce882671ab2200e4c0ec17e18.png'
      },
      {
        src: '/img/f98cca2aef066d8425a3f95897a6cbc6.png'
      },
    ];

    const homeStruct = [
      {
        struct: "gridItem",
        header: "관광지 정보",
        items: [
          {
            src: '/img/서울.jpg',
            header: '서울',
            mata: '',
            extra: '',
          },
          {
            src: '/img/부산.jpg',
            header: '부산',
            mata: '',
            extra: '',
          },
          {
            src: '/img/전주.png',
            header: '전주',
            mata: '',
            extra: '',
          },
          {
            src: '/img/목포.jpg',
            header: '목포',
            mata: '',
            extra: '',
          },
          {
            src: '/img/안동.jpg',
            header: '안동',
            mata: '',
            extra: '',
          },
        ]
      },
      {
        struct: "gridCard",
        header: "일정추천",
        items: [
          {
            src: '/img/서울.jpg',
            header: '커플 여행',
            mata: '',
            extra: '',
          },
          {
            src: '/img/부산.jpg',
            header: '레트로 감성',
            mata: '',
            extra: '',
          },
          {
            src: '/img/전주.png',
            header: '반려견 동반 여행지',
            mata: '',
            extra: '',
          },
          {
            src: '/img/목포.jpg',
            header: '새로운 서울 여행지',
            mata: '',
            extra: '',
          },
        ]
      },
    ];
    
    this.props.homeStore.setTopImageList(list);
    this.props.homeStore.setHomeStruct(homeStruct);
  }

  render() {

    const { topImageList, homeStruct, activeIdx } = this.props.homeStore;
    return (
      <div>
        <view.BannerViewer
          list={topImageList}
          activeIdx={activeIdx}
          prev={e => this.props.homeStore.setActiveIdx(activeIdx - 1)}
          next={e => this.props.homeStore.setActiveIdx(activeIdx + 1)}
          select={(e, idx) => this.props.homeStore.setActiveIdx(idx)}
        >
          {
            topImageList.length > 0 ? 
              <view.FadeImage 
                animation="fade"
                duration={500}
                src={topImageList[activeIdx].src} 
              /> :
              <Loader active inline='centered' />
          }
        </view.BannerViewer>
        <Divider hidden />
        <Container>
          {homeStruct.map((x, idx) => {
            if(x.struct === 'gridItem') {
              return <GridItem {...x}/>
            } else if(x.struct === 'gridCard') {
              return <GridCard {...x}/>
            } else {
              return <React.Fragment />
            }
          })}
          <ImageBanner src="/img/travel.jpg" >
            <Header inverted as='h1'>여행을 떠나 보세요</Header>
            <Typography variant="subtitle1" gutterBottom style={{color: 'white'}}>새로운 사람들과<br/>새로운 여행지에서<br/>인연을 즐겨보세요</Typography>
            <Divider hidden />
            <Button inverted>여행지친구 찾기</Button>
          </ImageBanner>
          {/* <div 
            style={{
              textAlign: 'center',
              width: '50%',
              height: '100px',
              background: 'linear-gradient(-270deg, #000, rgba(0, 0, 0, 0))',
              position: 'absolute',
              zIndex: 1

            }}
          >
            <p>
              The right thing… what is it?<br/>I wonder if you do the right thing…<br/>Does it really make everybody happy?
            </p>
          </div>
          <Image 
            rounded
            src="/img/travel.jpg"
          /> */}
          
        </Container>
      </div>
    )
  }
}