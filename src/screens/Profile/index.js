import React, { useState, useCallBack, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import * as Axios from "axios";
import { withRouter } from "react-router-dom";

import stateContext from "../../contexts";

import { url } from "../../constans";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    padding: "6% 5%",
    display: "flex",
    flexDirection: "column"
  },
  grid: {
    width: "100%",
    height: "100%",
    padding: "5%"
  },
  title: { marginBottom: "20px" },
  progress: {
    color: theme.palette.common.white
  },
  formControl: {
    minWidth: 120
  },
  button: {
    marginTop: theme.spacing(2)
  },
  inputLabel: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1)
  }
}));

const ProfileScreen = props => {
  const { state, dispatch } = useContext(stateContext);
  useEffect(() => {
    document.title = props.title;
  });

  const { match, location, history } = props;

  const [Name, setName] = useState({ value: state.form.Name, error: null });
  const [Family, setFamily] = useState({
    value: state.form.Family,
    error: null
  });
  const [Email, setEmail] = useState({ value: state.form.Email, error: null });
  const [Mobile, setMobile] = useState({
    value: state.form.Mobile,
    error: null
  });
  const [Address, setAddress] = useState({ value: "", error: null });
  const [CityID, setCityID] = useState({ value: "", error: null });
  const [ProvinceID, setProvinceID] = useState({ value: "", error: null });
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const mobileRegex = new RegExp("^[0][9][0-9]{9,9}");
  const emailRegex = new RegExp("^.+[@].+");

  useEffect(() => {
    Axios.get(url + "location/ProvinceGetAll")
      .then(res => {
        if (res.status === 200) {
          setProvinces(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Axios.get(url + "location/CityGetAll")
      .then(res => {
        if (res.status === 200) {
          setCities(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  });

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
              پروفایل
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
                  disabled
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
                  disabled
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
                  disabled
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
                <FormControl
                  className={classes.formControl}
                  style={{
                    display: "flex"
                  }}
                >
                  <InputLabel className={classes.inputLabel}>استان</InputLabel>
                  <Select
                    variant="filled"
                    value={ProvinceID}
                    onChange={event => setProvinceID(event.target.value)}
                  >
                    {provinces.map((item, index) => (
                      <MenuItem value={item.ID}>{`${item.Title}`}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  className={classes.formControl}
                  style={{
                    display: "flex"
                  }}
                >
                  <InputLabel className={classes.inputLabel}>شهر</InputLabel>
                  <Select
                    value={CityID}
                    variant="filled"
                    onChange={event => setCityID(event.target.value)}
                  >
                    {cities.map((item, index) => (
                      <MenuItem value={item.ID}>{`${item.Title}`}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label={"آدرس"}
                  variant={"filled"}
                  value={Address.value}
                  required
                  error={Address.error !== null}
                  onChange={e => {
                    const { value } = e.target;
                    setAddress(prevAddress => ({
                      value: value,
                      error: null
                    }));
                  }}
                  helperText={Address.error}
                  fullWidth
                  multiline
                  rowsMax="3"
                />
              </Grid>
            </Grid>
            <Button
              variant={"contained"}
              color={"primary"}
              //onClick={onSubmit}
              className={classes.button}
            >
              ثبت اطلاعات
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(ProfileScreen);
