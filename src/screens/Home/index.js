import React from "react";
import { Redirect } from "react-router-dom";

const HomeScreen = props => {
  const userToken = localStorage.getItem("userToken");
  console.log(userToken);
  if (userToken === null) return <Redirect to="/login" push />;
  else return <div>home</div>;
};

export default HomeScreen;
