import React, {Component} from 'react'

import {
  Divider,
  IconButton,
  List,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Icon,
} from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default class extends Component {

  componentDidMount() {
    // this.setState({
    //   open: true,
    // });
  }

  createList = (list, d, p = '', t = []) => {
    return list.map((x, i) => 
      x instanceof Array ? 
      <List 
        disablePadding
        key={d + '-' + i}
        className={'MuiList-root' + i}
      >
        {x.map((y, idx) => this.createChildren(idx, y, d, p + y.path, [...t, y.title]))}
      </List> : 
      <Divider key={d + '-' + i}/>
    )
  }

  createChildren = (idx, item, d, p, t) => {
    
    const k = d + '-' + idx + '-' + item.id;
    if(item.children) {
      const key = item.id + '-open';
      const open  = this.props.leftTreeStatus[key];
      return (
        <React.Fragment key={k}>
          <ListItem 
            button 
            key={k + 'item'}
            style={{paddingLeft: (16 * d) + 'px'}}
            onClick={() => this.props.handleTree(key)} 
          >
            <ListItemIcon>
              <Icon>{item.icon}</Icon></ListItemIcon>
            <ListItemText 
              primary={item.title}
              key={k + 'text'}
            />
            {open ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>
          <Collapse
            in={open} 
            timeout="auto" 
            unmountOnExit
            key={k + 'collapse'}
          >
            {this.createList(item.children, d + 1, p, t)}
          </Collapse>
        </React.Fragment>
      )
    } else {
      return (
        <ListItem 
          button
          key={k + 'item'}
          style={{paddingLeft: (16 * d) + 'px'}}
          onClick={() => console.log(item, p, t)}
        >
          <ListItemIcon>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.title}/>
        </ListItem>
      )
    }
  };

  render() {
    const {classes, open} = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.props.handleLeft}>
            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider/>
        {open && this.createList(this.props.list, 1)}
      </Drawer>
    )
  }
}