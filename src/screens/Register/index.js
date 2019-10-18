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
      height: "100vh",
      width: "100vw",
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
      padding: "5%"
    },
    title: { marginBottom: "3%" },
    input: {
      marginTop: "3%"
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
    const [mobile, setMobile] = useState("");
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState(0);

    const onSubmit = () => {};

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
                <TextField
                 className={classes.input}
                 label={"موبایل"}
                 type={"mobile"}
                 variant={"filled"}
                 onChange={e => setMobile(e.target.value)}
                 fullWidth
                />
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend" className={classes.radioLabel}>نوع کاربری :</FormLabel>
                    <RadioGroup name="userType" value={userType} className={classes.radios} onChange={e => setUserType(e.target.value)}>
                      <FormControlLabel value={3} control={<Radio />} label="صاحب بار" />
                      <FormControlLabel value={4} control={<Radio />} label="باربری" />
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