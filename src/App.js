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
    secondary: { main: "#FF4949" }
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
              <HomeScreen />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
