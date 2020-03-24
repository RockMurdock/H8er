import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./home/Home";
import RegisterForm from "./auth/RegisterForm";
import StatCardsList from "./statCards/StatCardsList";
import StatCardForm from "./statCards/StatCardForm";
import StatCardEditForm from "./statCards/StatCardEditForm";
import SpecialRuleForm from "./statCards/SpecialRuleForm"
import SpecialRuleEditForm from "./statCards/SpecialRuleEditForm"
import StatCardAddRuleForm from "./statCards/StatCardAddRuleForm";

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
            return <Home {...props} />;
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
            return <StatCardsList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/stats/new-stat"
        render={props => {
            if(hasUser){
          return <StatCardForm {...props} />;
        } else {
            return <Redirect to="/login"/>
        }
        }}
      />
      <Route
        exact
        path="/stats/:statCardId(\d+)/edit-stat"
        render={props => {
          if (hasUser) {
            return <StatCardEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/stats/new-rule"
        render={props => {
          if (hasUser) {
            return <SpecialRuleForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/stats/:specialRuleId(\d+)/edit-rule"
        render={props => {
          if (hasUser) {
            return <SpecialRuleEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/stats/:statCardId(\d+)/add-rule"
        render={props => {
          if (hasUser) {
            return <StatCardAddRuleForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default AppViews;
