import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    primary: { main: "#624E9C" },
    secondary: { main: "#FF4949" },
    common: { white: "#FFFFFF" }
  },
  typography: {
    fontFamily: "IRANSans"
  }
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomeScreen title="باروکس" />
            </Route>
            <Route path="/login">
              <LoginScreen title="ورود به سیستم" />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
