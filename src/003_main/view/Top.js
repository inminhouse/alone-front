import React, {Component} from 'react'
import { Link, } from 'react-router-dom';

import clsx from 'clsx';
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default class extends Component {


  render() {

    const {classes, open, anchorEl} = this.props;

    return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.props.handleLeft}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{color: 'white'}}>
              Alone
            </Link>
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={v => this.props.handleMenu(v.currentTarget)}
            color="inherit"
          >
            <Avatar alt="Xiwoo" src="/img/logo.png"/>
            &nbsp;
            <Typography variant="body1">
            xiwoo Lee
            </Typography>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={() => this.props.handleMenu(null)}
          >
            <MenuItem onClick={this.props.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.props.handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}