import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";

const App = () => {
  return (
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
  );
};

export default App;
