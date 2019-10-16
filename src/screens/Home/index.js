import React, { useState, useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography, Grid, Menu, MenuItem, Badge } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "white",
    height: "100vh",
    width: "100vw",
    verticalAlign: "middle"
  },
  appBar: {
    height: "10vh",
    width: "100vw",
  },
  appBarIcons: {
    marginRight: "1%",
    display: "flex"
  },
  grid: {
    width: "100vw",
    height: "100vh",
  },
  button: {
    color: theme.palette.common.white,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const HomeScreen = props => {
  const [open, setOpen] = useState(false);
  
  const userToken = localStorage.getItem("userToken");
  console.log(userToken);
  const classes = useStyles();
  if (userToken === null) return <Redirect to="/login" push />;
  else return (
  <div className={classes.container}>
    <Grid
        container
        className={classes.grid}
      >
        <Grid item xs={1} sm={1}>
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

        </Grid>
      </Grid>
  </div>
  );
};

export default HomeScreen;
