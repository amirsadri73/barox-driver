import React, { useState, useEffect } from 'react';
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
    FormLabel
} from "@material-ui/core";

import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

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
      flexDirection: "column"
    },
    grid: {
      width: "100vw",
      height: "100vh",
      padding: "2%"
    },
    title: { marginBottom: "3%" },
    input: {
      marginTop: "2%",
      width: "98%"
    },
    input1: {
      marginTop: "2%",
      width: "99%"
    },
    button: {
      width: "30%"
    },
    progress: {
      color: theme.palette.common.white,
    },
    formControl: {
      margin: theme.spacing(3),
    },
    radios: {
      marginLeft: "8%"
    },
    radioLabel: {
      marginBottom: "3%"
    }
}));


const RegisterScreen = props => {
    useEffect(() => {
        document.title = props.title;
      });
    
    //const { match, location, history } = props;
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [mobile, setMobile] = useState("");
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState("3");

    const onSubmit = () => {};

    const handle = (e) => {
      setUserType(e.target.value);
    }

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
                <div style={{display:"flex",flexWrap:"wrap", flexDirection:"row", justifyContent: "space-around"}}>

                <Grid item xs={12} sm={6}>
                <TextField
                 className={classes.input}
                 label={"نام"}
                 variant={"filled"}
                 onChange={e => setName(e.target.value)}
                 fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                 className={classes.input}
                 label={"نام خانوادگی"}
                 variant={"filled"}
                 onChange={e => setFamily(e.target.value)}
                 fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                 className={classes.input1}
                 label={"موبایل"}
                 type={"mobile"}
                 variant={"filled"}
                 onChange={e => setMobile(e.target.value)}
                 fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                 className={classes.input1}
                 label={"ایمیل"}
                 type={"email"}
                 variant={"filled"}
                 onChange={e => setEmail(e.target.value)}
                 fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                 className={classes.input}
                 label={"رمز عبور"}
                 type={"password"}
                 variant={"filled"}
                 onChange={e => setPassword(e.target.value)}
                 fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                 className={classes.input}
                 label={"تایید رمز عبور"}
                 type={"password"}
                 variant={"filled"}
                 onChange={e => setPasswordConfirm(e.target.value)}
                 fullWidth
                />
                </Grid>
                </div>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend" className={classes.radioLabel}>نوع کاربری :</FormLabel>
                    <RadioGroup name="userType" value={userType} className={classes.radios} onChange={handle}>
                      <FormControlLabel value={"3"} control={<Radio />} label="صاحب بار" />
                      <FormControlLabel value={"4"} control={<Radio />} label="باربری" />
                    </RadioGroup>
                </FormControl>
                <Button
                 variant={"contained"}
                 color={"primary"}
                 onClick={onSubmit}
                 className={classes.button}
                >
                 {loading ? (
                   <CircularProgress className={classes.progress} size={24} />
                 ) : (
                    <Typography>دریافت کد تایید</Typography>
                 )}
                </Button>
            </Paper>           
          </Grid>
        </Grid>
      </div>
    )
};


export default withRouter(RegisterScreen);