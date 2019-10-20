import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import RegisterScreen from "./screens/Register";
import VerifyScreen from "./screens/Verify";
import ProfileScreen from "./screens/Profile";
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
            <Route path="/register">
              <RegisterScreen title="ثبت نام در سیستم" />
            </Route>
            <Route path="/verify">
              <VerifyScreen title="ورود کد تایید" />
            </Route>
            <Route path="./profile">
              <ProfileScreen title="اطلاعات کاربری" />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
