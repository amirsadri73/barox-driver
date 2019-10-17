import React, { useState, useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, Button, Typography, CircularProgress } from "@material-ui/core";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { url } from "../../constans";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    width: "100vw",
    display: "table-cell",
    verticalAlign: "middle"
  },
  paper: {
    padding: "6% 5%"
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
  },
  progress: {
    color: theme.palette.common.white
  }
}));

const LoginScreen = props => {
  useEffect(() => {
    document.title = props.title;
  });
  const { match, location, history } = props;
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(() => {
    setLoading(true);
    Axios.post(url + "UserProfile/Login", { mobile, password })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("userToken", res.data.Token);
          setLoading(false);
          history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [mobile, password]);
  const classes = useStyles();
  //if (localStorage.getItem("userToken") === null)
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
                ورود به سیستم
              </Typography>
              <TextField
                className={classes.input}
                label={"موبایل"}
                type={"mobile"}
                variant={"filled"}
                onChange={e => setMobile(e.target.value)}
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
                onClick={onSubmit}
                className={classes.button}
              >
                {loading ? <CircularProgress className={classes.progress} /> : <Typography>Login</Typography>}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
    //else return <Redirect to="/" push />
};

export default withRouter(LoginScreen);
