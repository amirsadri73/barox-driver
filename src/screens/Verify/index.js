import React, { useState, useCallback, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Button,
  Typography,
  TextField,
  CircularProgress
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
    padding: "5% 6%"
  },
  grid: {
    width: "100vw",
    height: "100vh",
    padding: "5%"
  },
  title: {
    marginBottom: "3%"
  },
  input: {
    direction: "rtl",
    margin: "0 8px",
    display: "flex"
  },
  button: {
    marginTop: "8%",
    width: "100%"
  },
  progress: {
    color: theme.palette.common.white
  }
}));

const VerifyScreen = props => {
  useEffect(() => {
    document.title = props.title;
  });

  const { match, location, history } = props;
  const [inputNumber, setInputNumber] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(0);
  const inputs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleCodeChange = useCallback(
    (code, index) => {
      const newCode = inputNumber;
      newCode[index] = code;
      console.log(inputNumber, index);
      setInputNumber(newCode);
      if (code !== "") {
        if (index !== 5) {
          inputs[index + 1].current.focus();
        }
        setFocused(index + 1);
      }
    },
    [inputNumber, inputs]
  );

  const handleFocus = useCallback(index => {
    setFocused(index);
  }, []);

  useEffect(() => {
    inputs[0].current.focus();
  }, []);

  const onSubmit = () => {history.push("/profile")};


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
              ورود کد تایید
            </Typography>
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                width: "60%",
                margin: "24px auto"
              }}
            >
              {[0, 1, 2, 3, 4, 5].map((item, index) => (
                <TextField
                  type="text"
                  className={classes.input}
                  inputRef={inputs[index]}
                  onChange={e => handleCodeChange(e.target.value, index)}
                  onFocus={() => handleFocus(index)}
                  inputProps={{ style: { textAlign: "center" } }}
                />
              ))}
            </div>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={onSubmit}
              className={classes.button}
            >
              {loading ? (
                <CircularProgress className={classes.progress} size={24} />
              ) : (
                <Typography>تایید</Typography>
              )}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(VerifyScreen);
