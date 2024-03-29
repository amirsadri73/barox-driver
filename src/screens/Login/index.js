import React, { useState, useCallback, useEffect } from "react";
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
import { Redirect } from "react-router-dom";

import { url } from "../../constans";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    padding: "6% 5%",
    display: "flex",
    flexDirection: "column",
    height: "480px"
  },
  form: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    height: "100%"
  },
  grid: {
    width: "100vw",
    minHeight: "100vh",
    padding: "5%"
  },
  title: { marginBottom: "20px" },
  input: {
    marginTop: "3%"
  },
  button: {
    marginTop: "8%"
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
    //textDecoration: "underline"
  },
  linDiv: {}
}));

const LoginScreen = props => {
  useEffect(() => {
    document.title = props.title;
  });
  const { match, location, history } = props;
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState(0); //0 for mobile and password , 1 for mobile and code

  const handleTypeChange = () => {
    if (loginType === 0) setLoginType(1);
    else setLoginType(0);
  };


  const onSubmit = useCallback(() => {
    setLoading(true);
    if(loginType === 0) {
      Axios.post(url + "UserProfile/Login", { mobile, password })
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem("userToken", res.data.Token);
            setLoading(false);
            history.push("/profile");
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
    else {
      Axios.post(url + "UserProfile/save", { Mobile: mobile })
        .then(res => {
          if (res.status === 200) {
            setLoading(false);
            history.push("/profile");
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })
    }
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
            <div className={classes.form}>
              <TextField
                className={classes.input}
                label={"موبایل"}
                type={"mobile"}
                variant={"filled"}
                onChange={e => setMobile(e.target.value)}
                fullWidth
              />
              {loginType === 0 ? (
                <TextField
                  className={classes.input}
                  label={"رمز عبور"}
                  type={"password"}
                  variant={"filled"}
                  onChange={e => setPassword(e.target.value)}
                  fullWidth
                />
              ) : null}
              <Button
                variant={"contained"}
                color={"primary"}
                onClick={onSubmit}
                className={classes.button}
              >
                {loading ? (
                  <CircularProgress className={classes.progress} size={24} />
                ) : (
                  <Typography>ورود</Typography>
                )}
              </Button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Link
                  component="button"
                  onClick={handleTypeChange}
                  className={classes.link}
                >
                  {loginType === 0 ? (
                    <Typography className={classes.linkText}>
                      ورود با موبایل و کد تایید
                    </Typography>
                  ) : (
                    <Typography className={classes.linkText}>
                      ورود با موبایل و رمز‌عبور
                    </Typography>
                  )}
                </Link>
                <Link 
                  component="button" 
                  onClick={()=>history.push("/register")}
                  className={classes.link}>
                    <Typography>عضو نیستید؟ ثبت نام کنید</Typography>
                </Link>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  //else return <Redirect to="/" push />;
};

export default withRouter(LoginScreen);
