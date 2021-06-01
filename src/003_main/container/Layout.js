import React, {Component} from 'react';

import clsx from 'clsx';
import { inject, observer } from 'mobx-react';
import axios from 'axios';

//ui
import { withStyles, } from '@material-ui/core/styles';
import {
  CssBaseline,
  Divider,
  // Container,
  Typography,
  Breadcrumbs,
} from '@material-ui/core';

import {
  Container
} from 'semantic-ui-react'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {layoutStyle} from '../utils/styles';

import Top from '../view/Top';
import Left from '../view/Left';
import Bottom from '../view/Bottom';

import home from '../../004_home';

//순서 중요
@inject('mainStore')
@withStyles(layoutStyle)
@observer
export default class extends Component {

  state = {
    contentsHeight: window.innerHeight - 64
  }

  componentDidMount() {
    
    // const url = '/api3001';
    // axios.get(url)
    //   .then(r => {
        
    //     console.log("r", r);
    //     const rp = r.data.replaceAll("href=\".", "href=\"").replaceAll("href=\"", "href=\"" + url).replaceAll("src=\"", "src=\"" + url);
    //     console.log("rp:", rp);
    //     // this.setState({code: r});
    //     this.setState({code: rp});
    //     // this.setState({code: r.data});
    //   })
    //   .catch(e => console.error(e))

    const {menu, select} = this.props.mainStore;
    console.log(menu, select);
    const list = [
      {
        title: '일정관리',
        id: 'schedule',
        icon: 'schedule',
        path: '/schedule',
      },
      {
        title: '관광지정보',
        id: 'tourist',
        icon: 'card_travel',
        path: '/tourist',
      },
      {
        title: '일정추천',
        id: 'recommendation',
        icon: 'thumb_up',
        path: '/recommendation',
      },
      {
        title: '스크랩',
        id: 'scrap',
        icon: 'label',
        path: '/scrap',
      },
      {
        divider: true,
      },
      {
        title: '커뮤니티',
        id: 'community',
        icon: 'people',
        path: '/community',
        children: [
          {
            title: '전체 게시판',
            id: 'general',
            icon: 'dashboard',
            path: '/general',
            children: [
              {
                title: '주간 BEST',
                id: 'week-best',
                icon: 'list',
                path: '/week-best',
              },
              {
                title: '월간 BEST',
                id: 'month-best',
                icon: 'list',
                path: '/month-best',
              },
              {
                title: '여행꿀팁 BEST',
                id: 'tip-best',
                icon: 'list',
                path: '/tip-best',
              },
              {
                title: '핫플추천 BEST',
                id: 'hot-best',
                icon: 'list',
                path: '/hot-best',
              },
              {
                divider: true,
              },
              {
                title: '자주묻는 질문',
                id: 'qna-best',
                icon: 'list',
                path: '/qna',
              },
              {
                title: '통합 자유게시판',
                id: 'integration',
                icon: 'list',
                path: '/integration',
              },
            ],
          },
          {
            title: '테마별 게시판',
            id: 'theme',
            icon: 'view_list',
            path: '/theme',
            children: [
              {
                title: '유적지',
                id: 'historical',
                icon: 'list',
                path: '/historical',
                children: [
                  {
                    title: '경복궁',
                    id: '0001',
                    icon: 'list',
                    path: '/',
                    children: [
                      {
                        title: '여행꿀팁', 
                        id: '0001-tip',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '핫플추천', 
                        id: '0001-hot',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '자유게시판', 
                        id: '0001-board',
                        icon: 'list',
                        path: '/',
                      },
                    ],
                  },
                  {
                    title: '청계천', 
                    id: '0002',
                    icon: 'list',
                    path: '/',
                    children: [
                      {
                        title: '여행꿀팁', 
                        id: '0002-tip',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '핫플추천', 
                        id: '0002-hot',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '자유게시판', 
                        id: '0002-board',
                        icon: 'list',
                        path: '/',
                      },
                    ],
                  },
                  {
                    title: '창경궁', 
                    id: '0003',
                    icon: 'list',
                    path: '/',
                    children: [
                      {
                        title: '여행꿀팁', 
                        id: '0003-tip',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '핫플추천', 
                        id: '0003-hot',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '자유게시판', 
                        id: '0003-board',
                        icon: 'list',
                        path: '/',
                      },
                    ],
                  },
                ],
              },
              {
                title: '종교',
                id: 'religious',
                icon: 'list',
                path: '/religious',
                children: [
                  {
                    title: '경복궁',
                    id: '0001',
                    icon: 'list',
                    path: '/',
                    children: [
                      {
                        title: '여행꿀팁', 
                        id: '0001-tip',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '핫플추천', 
                        id: '0001-hot',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '자유게시판', 
                        id: '0001-board',
                        icon: 'list',
                        path: '/',
                      },
                    ],
                  },
                  {
                    title: '청계천', 
                    id: '0002',
                    icon: 'list',
                    path: '/',
                    children: [
                      {
                        title: '여행꿀팁', 
                        id: '0002-tip',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '핫플추천', 
                        id: '0002-hot',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '자유게시판', 
                        id: '0002-board',
                        icon: 'list',
                        path: '/',
                      },
                    ],
                  },
                  {
                    title: '창경궁', 
                    id: '0003',
                    icon: 'list',
                    path: '/',
                    children: [
                      {
                        title: '여행꿀팁', 
                        id: '0003-tip',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '핫플추천', 
                        id: '0003-hot',
                        icon: 'list',
                        path: '/',
                      },
                      {
                        title: '자유게시판', 
                        id: '0003-board',
                        icon: 'list',
                        path: '/',
                      },
                    ],
                  },
                ],
              },
              {
                title: '전시',
                id: 'display',
                icon: 'list',
                path: '/display',
              },
              {
                title: '거리',
                id: 'street',
                icon: 'list',
                path: '/street',
              },
              {
                title: '공원',
                id: 'park',
                icon: 'list',
                path: '/park',
              
              },
              {
                title: '건축물',
                id: 'building',
                icon: 'list',
                path: '/building',
              },
              {
                title: '교육',
                id: 'education',
                icon: 'list',
                path: '/education',
              
              },
              {
                title: '자연',
                id: 'nature',
                icon: 'list',
                path: '/nature',
              
              },
              {
                title: '문화',
                id: 'culture',
                icon: 'list',
                path: '/culture',
              },
              {
                title: '테마파크',
                id: 'themepark',
                icon: 'list',
                path: '/themepark',
              },
              {
                title: '스포츠',
                id: 'sports',
                icon: 'list',
                path: '/sports',
              },
              {
                title: '기타',
                id: 'etc',
                icon: 'list',
                path: '/etc',
              },
            ],
          },
        ]
      },
    ];
    const l = this.props.mainStore.createMenu(list);
    console.log(l);
    this.props.mainStore.setMenu(l)
    console.log(this.props.mainStore.menu);
    this.setState({list: l});

  }
  
  //function
  createMenu = list => list.reduce((a,b) => {
    if(b.divider) {
      a.push(<Divider />);
      a.push([]);
    } else {
      
      if(b.children){
        b.children = this.createMenu(b.children);
        // b.open = false;
        this.props.mainStore.addTreeStatus(b.id + '-open');
      }

      if(a.length === 0){
        a.push([b]);
      } else {
        a[a.length-1] = [
          ...a[a.length-1],
          b
        ];
      }
    }
    return a;
  }, []);

  
  render() {
    // const src = "http://localhost:3001/";
    const src = "/api3001";
    // console.log(window.innerHeight, window.outerHeight);

    // console.log(this.state.contentsHeight);
    const {status, leftTreeStatus} = this.props.mainStore;
    const {left, topUser} = status;
    const {
      handleTopUser,
      handleLeft,
      addTreeStatus,
      handleTree,
      closeTree,
    } = this.props.mainStore;
    
    const {classes} = this.props

    console.log(this.state.code);
    return (
      <div className={classes.root}>
        <CssBaseline />

        <Top
          classes = {classes}
          anchorEl = {topUser}
          open = {left}
          handleLeft = {handleLeft}
          handleMenu = {handleTopUser}
        />

        <Left
          classes = {classes}
          open = {left}
          leftTreeStatus = {leftTreeStatus}
          handleLeft = {handleLeft}
          addTreeStatus = {addTreeStatus}
          handleTree = {handleTree}
          closeTree = {closeTree}

          list = {this.state.list}
        />

        <div
          className={clsx(classes.content, {
            [classes.contentShift]: left,
            
          })}
        >
          <main 
            style={{
              // height: window.innerHeight - 64 //- 376.86
              height: '100%' //- 376.86
            }}
          >
            
            <home.Layout/>


            <Container
              style={{height: "100%"}}
              // height="100%"
            >
            <div className={classes.drawerHeader} key="breadcrumb">
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                {/* <Link color="inherit" href="/" onClick={() => console.log('')}> */}
                <Typography color="inherit">
                  Material-UI
                </Typography>
                {/* </Link> */}
                {/* <Link color="inherit" href="/getting-started/installation/" onClick={() => console.log('')}> */}
                <Typography color="inherit">
                  Core
                </Typography>
                {/* </Link> */}
                <Typography color="textPrimary">Breadcrumb</Typography>
              </Breadcrumbs>
              <Typography paragraph>
              ddd
              </Typography>
            </div>
              {/* <div
                style={{
                  border: 0,
                  padding:'0px', margin: 0, width: '100%', height: '100%'
                }}
              > */}
              {/* <iframe
                // src="http://erel.kr/bbs/board.php?bo_table=study&wr_id=93&sca=Html%2FCSS%2FScript&page=2"
                src="/api3000/posts/first-post"
                // display="inline-block"
                onLoad={(i,d) => {
                  console.log(i);
                  // const h = i.target.contentWindow.document.body.scrollHeight;
                  // console.log(h);
                  // i.target.height = h + 20;
                }}
                // width="100%"
                // height ="100%"
                style={{
                  scrolling: "no",
                  width: "100%", 
                  height: "100%", 
                  marginwidth: 0, marginheight: 0,
                  frameborder: 0,
                  border: "0px"
                }}
              /> */}
              {/* <Embed
              
                iframe={{
                  // src:"http://erel.kr/bbs/board.php?bo_table=study&wr_id=93&sca=Html%2FCSS%2FScript&page=2",
                  // src: "/api3001",
                  // src: "http://localhost:3001/",
                  allowFullScreen: true,
                  // style: {
                  //   padding: 10
                  // }
                  onLoad: (i,e) => {
                    console.log('onLoad');
                    console.log(i, e);
                    const h = i.target.contentWindow.document.body.scrollHeight;
                    console.log(h);
                  },
                  height: "100%"
                }}
                defaultActive={true}
                url="http://localhost:3001/"
              /> */}
              <iframe
                // src="http://erel.kr/bbs/board.php?bo_table=study&wr_id=93&sca=Html%2FCSS%2FScript&page=2"
                // src="/api3001"
                // src={src}
                // srcDoc={this.state.code}
                // src="/iframe.html"
                // src={this.state.code}
                src="http://localhost:3001/"
                // src="/api3000/posts/first-post"
                // display="inline-block"
                // onstorage={(i,e) => {
                //   console.log('error');
                //   console.log(i, e);

                // }}
                // onBeforePrint={(i,e) => {
                //   console.log('error');
                //   console.log(i, e);

                // }}
                onError={(i,e) => {
                  console.log('error');
                  console.log(i, e);

                }}
                // onMessage={(i,e) => {
                //   console.log('message');
                //   console.log(i, e);

                // }}
                onLoad={(i,d) => {
                  console.log("onLoad", i, d);
                  // const h = i.target.contentWindow.document.body.scrollHeight;
                  // console.log(h);
                  // i.target.height = h + 20;
                }}
                // width="100%"
                // height ="100%"
                style={{
                  scrolling: "no",
                  width: "100%", 
                  height: "900px", 
                  marginwidth: 0, marginheight: 0,
                  frameborder: 0,
                  border: "0px"
                }}
              />
              {/* </div> */}
              {/* <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
              
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography> */}
            </Container>
          </main>
          
          <Bottom/>
        </div>
      </div>
    );
  }
}