import React, { useState, useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, Typography, Grid, Menu, MenuItem, Badge } from '@material-ui/core';
import CostumeAppBar from '../../components/appBar';

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
  //if (userToken === null) return <Redirect to="/login" push />;
  //else return (
    return (
  <div className={classes.container}>
    <Grid
        container
        className={classes.grid}
      >
        <Grid item xs={1} sm={1}>
          <CostumeAppBar />
        </Grid>
      </Grid>
  </div>
  );
};

export default HomeScreen;
