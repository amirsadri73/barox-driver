import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Link
} from "@material-ui/core";

import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Redirect, Link as RouterLink } from "react-router-dom";

import { url } from "../../constans";
import { validationCondition } from "jest-validate/build/condition";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    padding: "6% 5%",
    display: "flex",
    flexDirection: "column"
  },
  grid: {
    width: "100%",
    height: "100%",
    padding: "2%"
  },
  title: { marginBottom: "20px" },
  button: {},
  progress: {
    color: theme.palette.common.white
  },
  formControl: {
    margin: theme.spacing(3)
  },
  radios: {
    marginLeft: "3%"
  },
  radioLabel: {
    marginBottom: "3%"
  },
  link: {
    marginTop: "2%"
  }
}));

const RegisterScreen = props => {
  useEffect(() => {
    document.title = props.title;
  });

  const { match, location, history } = props;
  const [Name, setName] = useState({ value: "", error: null });
  const [Family, setFamily] = useState({ value: "", error: null });
  const [Email, setEmail] = useState({ value: "", error: null });
  const [Password, setPassword] = useState({ value: "", error: null });
  const [ConfirmPassword, setConfirmPassword] = useState({
    value: "",
    error: null
  });
  const [Mobile, setMobile] = useState({ value: "", error: null });
  const [Loading, setLoading] = useState(false);
  const [UserProfileType, setUserProfileType] = useState("3");
  const mobileRegex = new RegExp("^[0][9][0-9]{9,9}");
  const emailRegex = new RegExp("^.+[@].+");

  const validation = useCallback(() => {
    let res = true;
    if (Name.value === "") {
      setName(prevName => ({
        value: prevName.value,
        error: "لطفا نام خود را وارد کنید"
      }));
      res = false;
    }
    if (Family.value === "") {
      setFamily(prevFamily => ({
        value: prevFamily.value,
        error: "لطفا نام خانوادگی خود را وارد کنید"
      }));
      res = false;
    }
    if (Mobile.value === "") {
      setMobile(prevMobile => ({
        value: prevMobile.value,
        error: "لطفا شماره تلفن خود را وارد کنید"
      }));
      res = false;
    }
    if (!mobileRegex.test(Mobile.value)) {
      setMobile(prevMobile => ({
        value: prevMobile.value,
        error: "شماره موبایل وارد شده قابل قبول نیست"
      }));
      res = false;
    }
    if (Email.value === "") {
      setEmail(prevEmail => ({
        value: prevEmail.value,
        error: "لطفا ایمیل خود را وارد کنید"
      }));
      res = false;
    }
    if (!emailRegex.test(Email.value)) {
      setEmail(prevEmail => ({
        value: prevEmail.value,
        error: "ایمیل وارد شده قابل قبول نیست"
      }));
      res = false;
    }
    if (Password.value === "") {
      setPassword(prevPassword => ({
        value: prevPassword.value,
        error: "لطفا رمز عبور خود را وارد کنید"
      }));
      res = false;
    }
    if (ConfirmPassword.value === "") {
      setConfirmPassword(prevConfirmPassword => ({
        value: prevConfirmPassword.value,
        error: "لطفا رمز عبور خود را تایید کنید"
      }));
      res = false;
    }
    if (Password.value !== ConfirmPassword.value) {
      setPassword(prevPassword => ({
        value: prevPassword.value,
        error: "رمز و تایید رمز شما با هم برابر نیستند"
      }));
      setConfirmPassword(prevConfirmPassword => ({
        value: prevConfirmPassword.value,
        error: "رمز و تایید رمز شما با هم برابر نیستند"
      }));
      res = false;
    }
    return res;
  }, [
    ConfirmPassword.value,
    Email.value,
    Family.value,
    Mobile.value,
    Name.value,
    Password.value,
    emailRegex,
    mobileRegex
  ]);

  const onSubmit = useCallback(() => {
    if (validation()) {
      setLoading(true);
      Axios.post(url + "UserProfile/save", {
        Name: Name.value,
        Family: Family.value,
        Email: Email.value,
        Mobile: Mobile.value,
        Password: Password.value,
        ConfirmPassword: ConfirmPassword.value,
        UserProfileType
      })
        .then(res => {
          if (res.status === 200) {
            console.log(res);
            setLoading(false);
            //history.push("/Login");
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [
    validation,
    Name.value,
    Family.value,
    Email.value,
    Mobile.value,
    Password.value,
    ConfirmPassword.value,
    UserProfileType
  ]);

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
              ثبت نام
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label={"نام"}
                  variant={"filled"}
                  value={Name.value}
                  required
                  error={Name.error !== null}
                  onChange={e => {
                    const { value } = e.target;
                    setName(prevName => ({
                      value: value,
                      error: null
                    }));
                  }}
                  helperText={Name.error}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label={"نام خانوادگی"}
                  variant={"filled"}
                  value={Family.value}
                  required
                  error={Family.error !== null}
                  onChange={e => {
                    const { value } = e.target;
                    setFamily(prevFamily => ({
                      value: value,
                      error: null
                    }));
                  }}
                  helperText={Family.error}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label={"موبایل"}
                  type={"mobile"}
                  variant={"filled"}
                  value={Mobile.value}
                  required
                  error={Mobile.error !== null}
                  onChange={e => {
                    const { value } = e.target;
                    setMobile(prevMobile => ({
                      value: value,
                      error: null
                    }));
                  }}
                  helperText={Mobile.error}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label={"ایمیل"}
                  type={"email"}
                  variant={"filled"}
                  value={Email.value}
                  required
                  error={Email.error !== null}
                  onChange={e => {
                    const { value } = e.target;
                    setEmail(prevEmail => ({
                      value: value,
                      error: null
                    }));
                  }}
                  helperText={Email.error}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label={"رمز عبور"}
                  type={"password"}
                  variant={"filled"}
                  value={Password.value}
                  required
                  error={Password.error !== null}
                  onChange={e => {
                    const { value } = e.target;
                    setPassword(prevPassword => ({
                      value: value,
                      error: null
                    }));
                  }}
                  helperText={Password.error}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label={"تایید رمز عبور"}
                  type={"password"}
                  variant={"filled"}
                  value={ConfirmPassword.value}
                  required
                  error={ConfirmPassword.error !== null}
                  onChange={e => {
                    const { value } = e.target;
                    setConfirmPassword(prevConfirmPassword => ({
                      value: value,
                      error: null
                    }));
                  }}
                  helperText={ConfirmPassword.error}
                  fullWidth
                />
              </Grid>
            </Grid>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className={classes.radioLabel}>
                <Typography variant="h6" component="h6">
                  نوع کاربری
                </Typography>
              </FormLabel>
              <RadioGroup
                name="userProfileType"
                value={UserProfileType}
                className={classes.radios}
                onChange={e => setUserProfileType(e.target.value)}
              >
                <FormControlLabel
                  value={"3"}
                  control={<Radio />}
                  label="صاحب بار"
                />
                <FormControlLabel
                  value={"4"}
                  control={<Radio />}
                  label="باربری"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={onSubmit}
              className={classes.button}
            >
              {Loading ? (
                <CircularProgress className={classes.progress} size={24} />
              ) : (
                <Typography>دریافت کد تایید</Typography>
              )}
            </Button>
            <Link
              component="button"
              //color="secondary"
              //onClick={handleTypeChange}
              className={classes.link}
            >
              <RouterLink to="/Login">
                <Typography>قبلا ثبت نام کرده اید؟ برای ورود کلیک کنید</Typography>
              </RouterLink>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(RegisterScreen);
