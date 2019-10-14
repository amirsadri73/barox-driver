import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "50%",
    width: "50%",
    margin: "auto"
  }
}));

const LoginScreen = props => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#624E9C",
        height: "100vh",
        width: "100vw",
        display: "table-cell",
        verticalAlign: "middle"
      }}
    >
      <Paper className={classes.root}>
        login
        <TextField id="standard-name" label="Email" />
        <TextField id="standard-uncontrolled" label="Password" />
      </Paper>
    </div>
  );
};

export default LoginScreen;
