import React, { useState, useCallBack } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography, Grid, Menu, MenuItem, Badge } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles(theme => ({
    appBar: {
        height: "10vh",
        width: "100vw",
      },
      appBarIcons: {
        marginRight: "1%",
        display: "flex"
      },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      }
}));


const CostumeAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
              </Typography>
              <div className={classes.appBarIcons}>
                <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
                </IconButton>
                <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
                </IconButton>
              </div>
              <Button variant={"outlined"} className={classes.button}>Login</Button>
            </Toolbar>
          </AppBar>
    );
};

export default CostumeAppBar;