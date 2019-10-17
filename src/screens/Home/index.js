import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography
} from "@material-ui/core";
import CostumeAppBar from "../../components/appBar";
import CostumeDrawer from "../../components/drawer";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
    //backgroundColor: "red"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    paddingLeft: "20%"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const HomeScreen = props => {
  useEffect(() => {
    document.title = props.title;
  });
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const userToken = localStorage.getItem("userToken");
  console.log(userToken);
  const classes = useStyles();
  if (userToken === null) return <Redirect to="/login" push />;
  else {
    return (
      <div className={classes.container}>
        <CostumeAppBar open={open} onDrawerOpen={handleDrawerOpen} />
        <CostumeDrawer open={open} onDrawerClose={handleDrawerClose} />
        <div className={classes.drawerHeader} />
        <main
          className={clsx(classes.content, {
          [classes.contentShift]: open,
          })}
        >
          <Typography paragraph >
            باروکس متشکل است از فعالان با تجربه ی حوزه ی حمل نقل و شرکت چشم انداز 
            ارتباط با مدیریت  آقایان یاسر موذن زاده و آرش قاجار که می کوشند مشکلات این حوزه را شناسایی و رفع نمایند. 
            تیم باروکس از با مدیریت خانم زهرا محمدبیگی می کوشد 
            تا طرح ارائه بار به رانندگان را به بهترین شکل در بستر تلفن همراه ارئه نماید.
          </Typography>
        </main>
      </div>
    );
  }
};

export default HomeScreen;
