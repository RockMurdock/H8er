import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import RegisterForm from "./auth/RegisterForm";
import StatCardsList from "./statCards/StatCardsList";
import StatCardForm from "./statCards/StatCardForm";
import StatCardEditForm from "./statCards/StatCardEditForm";
import SpecialRuleForm from "./statCards/SpecialRuleForm"
import SpecialRuleEditForm from "./statCards/SpecialRuleEditForm"
import StatCardAddRuleForm from "./statCards/StatCardAddRuleForm";
import ArmyListList from "./armyLists/ArmyListList"
import ArmyListForm from "./armyLists/ArmyListForm"
import ArmyListEditForm from "./armyLists/ArmyListEditForm";
import ArmyListAddStatForm from "./armyLists/ArmyListAddStatForm"
import SpecialRuleDetail from "./statCards/SpecialRuleDetail";
import ArmyListDetail from "./armyLists/ArmyListDetail";

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
        path="/stats/:armyTypeId(\d+)/:specialRuleId(\d+)"
        render={props => {
          if (hasUser) {
            return <SpecialRuleDetail {...props} />;
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
      <Route
        exact
        path="/army-lists"
        render={props => {
          if (hasUser) {
            return <ArmyListList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/army-lists/new"
        render={props => {
          if (hasUser) {
            return <ArmyListForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/army-lists/:armyListId(\d+)/edit-armycard"
        render={props => {
          if (hasUser) {
            return <ArmyListEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
        <Route
        exact
        path="/army-lists/:armyListId(\d+)/edit-armylist"
        render={props => {
          if (hasUser) {
            return <ArmyListAddStatForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/army-lists/:id(\d+)/detail"
        render={props => {
          if (hasUser) {
            return <ArmyListDetail {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default AppViews;
