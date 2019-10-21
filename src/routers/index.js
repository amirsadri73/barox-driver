import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";
import RegisterScreen from "../screens/Register";
import VerifyScreen from "../screens/Verify";
import ProfileScreen from "../screens/Profile";
const router = () => {
  return (
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
        <Route path="/profile">
          <ProfileScreen title="اطلاعات کاربری" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default router;
