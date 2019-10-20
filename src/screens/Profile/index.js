import React, { useState, useCallBack, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Link
} from "@material-ui/core";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import { url } from "../../constans";

const useStyles = makeStyles(theme => ({
    container: {
      backgroundColor: theme.palette.primary.main,
      height: "100%",
      width: "100%",
      display: "table-cell",
      verticalAlign: "middle"
    },
    paper: {
      padding: "6% 5%",
      display: "flex",
      flexDirection: "column",
      height: "65vh"
    },
    grid: {
      width: "100vw",
      height: "100vh",
      padding: "5%"
    },
    title: { marginBottom: "20px" },
    input: {
      marginTop: "3%"
    },
    button: {
      marginTop: "8%",
      //width: "100%"
    },
    progress: {
      color: theme.palette.common.white
    },
    link: {
      color: theme.palette.secondary.main,
      marginTop: "5%"
    },
    linkText: {
      textDecoration: "underline"
    },
    linDiv: {}
  }));

  const ProfileScreen = props => {
    useEffect(() => {
        document.title = props.title;
      });

      //return();

  };

  export default withRouter(ProfileScreen);