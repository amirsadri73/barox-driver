import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    width: "100vw",
    display: "table-cell",
    verticalAlign: "middle"
  },
  paper: {
    width: "100%",
    height: "40vh",
    padding: "5% 6%"
  },
  grid: {
    margin: 0,
    width: "100vw",
    height: "100vh"
  },
  input: {},
  button: {
    marginTop: 20,
    paddingRight: 100,
    paddingLeft: 100
  }
}));

const LoginScreen = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.grid}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={9} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              ورود
            </Typography>
            <TextField
              id="standard-name"
              className={classes.input}
              label="ایمیل"
              fullWidth
            />
            <TextField
              id="standard-uncontrolled"
              className={classes.input}
              label="رمز عبور"
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              ورود
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginScreen;
