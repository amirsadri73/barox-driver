import React from "react";
import { Redirect } from "react-router-dom";

const HomeScreen = props => {
  return <Redirect to="/login" push />;
};

export default HomeScreen;
