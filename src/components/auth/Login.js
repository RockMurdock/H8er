import React, { useState } from "react";
import API from "../../modules/ApiManager";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form
} from "reactstrap";

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", username: "" }); //initial state equal to an object with keys email and username that have empty string value
  //handleFieldChange handles each state update and targets the values of email and username

  const handleFieldChange = evt => {
    //a variable which takes in email and username
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    //the state of the credentials changes to the value of email and username
    setCredentials(stateToChange);
  };
  const handleLogin = evt => {
    API.get("users").then(users => {
      const user = users.find(
        user =>
          user.email === credentials.email &&
          user.username === credentials.username
      );
      console.log(credentials)
      debugger
      if (user !== undefined) {
        sessionStorage.setItem("userId", user.id);
        props.setUser(credentials);
        props.history.push("/army-lists");
      } else {
        window.alert("try again");
      }
    });
  };
  return (
    <>
      <div className="loginForm">
        <div>
          <br />
          <center>
            <Form style={{ width: "50%", border: "solid 1px", padding:"10px" }}>
              <h3>Sign in</h3>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Email Address:</InputGroupText>
                </InputGroupAddon>
                <Input
                  onChange={handleFieldChange}
                  type="email"
                  id="email"
                  placeholder="email address"
                ></Input>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Username:</InputGroupText>
                </InputGroupAddon>
                <Input
                  onChange={handleFieldChange}
                  type="username"
                  id="username"
                  placeholder="username"
                ></Input>
              </InputGroup>
              <br />
              <Button type="submit" onClick={handleLogin}>
                Submit
              </Button>
              <p>
                Don't have an account? <span></span>
                <Link
                  to="/register"
                  style={{ textDecoration: "none" }}
                  className="signLink"
                >
                  Sign up
                </Link>{" "}
              </p>
            </Form>
          </center>
        </div>
      </div>
    </>
  );
};

export default Login;
