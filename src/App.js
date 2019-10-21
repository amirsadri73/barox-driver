import React, { useReducer } from "react";

import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Router from "./routers";
import reducer from "./reducers";
import stateContext from "./contexts";

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
const initialState = {
  form: {
    Name: "",
    Family: "",
    Email: "",
    Mobile: ""
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const StateProvider = stateContext.Provider;
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <StateProvider value={{ state, dispatch }}>
          <Router />
        </StateProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
