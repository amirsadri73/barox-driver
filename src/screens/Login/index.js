import React, { useState } from "react";
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
    padding: "5% 6%"
  },
  grid: {
    width: "100vw",
    height: "100vh",
    padding: "5%"
  },
  title: { marginBottom: "3%" },
  input: {
    marginTop: "3%"
  },
  button: {
    marginTop: "8%",
    paddingRight: "5%",
    paddingLeft: "5%"
  }
}));

const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.grid}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3" className={classes.title}>
              ورود
            </Typography>
            <TextField
              className={classes.input}
              label={"ایمیل"}
              variant={"filled"}
              onChange={e => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              className={classes.input}
              label={"رمز عبور"}
              type={"password"}
              variant={"filled"}
              onChange={e => setPassword(e.target.value)}
              fullWidth
            />
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={() => console.log(email, password)}
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
