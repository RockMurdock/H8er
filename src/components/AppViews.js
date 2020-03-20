import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./home/Home";
import RegisterForm from "./auth/RegisterForm";
import StatCardsList from "./statCards/StatCardsList"

const AppViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <>
      <Route
        exact
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/home"
        render={props => {
          if (hasUser) {
            return <Home />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/register"
        render={props => {
          return <RegisterForm setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/stats"
        render={props => {
          if (hasUser) {
            return <StatCardsList/>;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default AppViews;
