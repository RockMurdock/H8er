import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import {default as H8er} from "./components/H8er";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render((
  <Router>
    <H8er />
  </Router>),
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
